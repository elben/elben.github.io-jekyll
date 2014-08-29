---
layout: post
title: "Using core.async for producer-consumer systems"
categories: blog
tags: clojure
draft: true
---

Say we want to process a lot of data coming in from a single source (e.g. stdin) and then output the results to a single destination (e.g. stdout). We can think of this as a producer-consumer problem.

<div class="some-padding"><img src="{{ site.url }}/images/core-async-pattern/core-async-pattern-1.png"/></div>

A naive solution may look like this:

```
(defn process
  "Do 'work'"
  [line]
  (Thread/sleep 10))

(def stdin-reader
  (java.io.BufferedReader. *in*))

;; Read each line from stdin
(doseq [line (line-seq stdin-reader)]
  (process line)
	(println line))
```

But if `process` is expensive, we'd find this program unacceptably slow. On my machine, this baseline program takes 115.5 seconds using 9% of the CPU to process 10,000 lines.

When the processing logic is expensive (whether CPU or I/O), we often deploy thread pools to take advantage of our multi-core CPUs. On the JVM we can use `java.util.concurrent.Executors` to deploy a pool of process workers. Each worker can then output their work into a shared concurrent queue, and another thread can consume from this queue to print to stdout.

## A simple alternative

A simple alternative is to use core.async. We can create consumer threads that listen for data from an input channel, process the data, and push the result to an output channel.

<div class="some-padding"><img src="{{ site.url }}/images/core-async-pattern/core-async-pattern-2.png" width="100%"/></div>

To do this, we first create our channels:

```clojure
(ns my-test-ns
  (:require [clojure.core.async :as async]))

(defn process [line]
  (Thread/sleep 10)
  line)

(def stdin-reader
  (java.io.BufferedReader. *in*))

(def in-chan (async/chan))
(def out-chan (async/chan))
```

Then, using the `async/thread` macro, we put each consumer on its own thread so that they can do blocking takes and puts. We could use a go block here, which employs its own thread pool, but I've found that go threads result in less throughput than devoted consumer threads for CPU-heavy consumers. Our consumers look like this:

```clojure
(defn start-async-consumers
  "Start num-consumers threads that will consume work
  from the in-chan and put it into the out-chan."
  [num-consumers]
  (dotimes [_ num-consumers]
    (async/thread
      (while true
        (let [line (async/<!! in-chan)
              data (process line)]
          (async/>!! out-chan line))))))
```

Then we write the function that will print out the processed items. Again, we could have used a go block here.

```clojure
(defn start-async-aggregator
  "Take items from the out-chan and print it."
  []
  (async/thread
    (while true
      (let [data (async/<!! out-chan)]
        (println data)))))
```

Finally we start our program:

```clojure
(do
  (start-async-consumers 8)
  (start-async-aggregator)
  (doseq [line (line-seq stdin-reader)]
    (async/>!! in-chan line)))
```

This version ran in 20.086 seconds using 54% of the CPU to process 10,000 lines on my computer. That's almost six times faster.

I think there are cases where we would prefer Java's Executors library to core.async. But as we can see, core.async's `thread` macro provides a simple, painless way of setting up producer-consumer systems.

# Further reading

[Rich Hickey: Clojure core.async Channels](http://clojure.com/blog/2013/06/28/clojure-core-async-channels.html)

[Timothy Baldridge: Core.Async (video)](https://www.youtube.com/watch?v=enwIIGzhahw)

# Speed test results

```bash
# Set up input file
repeat 10000 echo "." >> input

# Run inline
time lein run inline < input > output
# 9.56s user 1.54s system 9% cpu 1:55.50 total

# Run async
time lein run async < input > output
# 9.30s user 1.57s system 54% cpu 20.086 total
```
