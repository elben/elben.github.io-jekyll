---
layout: post
title:  "Understanding Transducers"
categories: blog
tags: clojure
draft: true
---

What are transducers? How do they work?

These are questions that I think many of us have. *Using* transducers is easy enough—but how do they work underneath the hood?

After reading Tom Ashworth's fine blog post, [CSP and transducers in JavaScript](http://phuu.net/2014/08/31/csp-and-transducers.html), I decided to re-implement transducers to comprehend this stuff. We won't spend time building transducers “from the ground up” by applying abstractions, as Tom did. Instead, we'll explore transducers by writing, examining and using transducer-building functions.

I encourage you to type these examples into your REPL, or use [clojurescript.net](http://clojurescript.net/).

## Reduce everything

We are familiar with `map` and `filter`, and we know that we can combine them together, like this:

```clojure
(filter even? (range 10))
; ⇒ (0 2 4 6 8)

(map inc '(0 2 4 6 8))
; ⇒ (1 3 5 7 9)

(map inc (filter even? (range 10)))
; ⇒ (1 3 5 7 9)
```

A key insight, however, is that `map` and `filter` can be defined using `reduce`:

```clojure
(defn filter-even-reducer
  [result input]
  (if (even? input)
    (conj result input)
    result))

(reduce filter-even-reducer [] (range 10))
; ⇒ [0 2 4 6 8]

(defn map-inc-reducer
  [result input]
  (conj result (inc input)))

(reduce map-inc-reducer [] [0 2 4 6 8])
; ⇒ [1 3 5 7 9]

(reduce
  map-inc-reducer
  []
  (reduce
    filter-even-reducer
    []
    (range 10)))
; ⇒ [1 3 5 7 9]
```

As you can see, we had to use two vectors to do two reduces. But with transducers, our goal is to compose these two reduces into one reducing function that won't need any intermediate data structures.

Let's say we compose some functions like below, where `mapping` and `filtering` are our own versions of `map` and `filter`:

```clojure
(defn square [x] (* x x))

(def xform
  (comp
    (filtering even?) 
    (filtering #(< % 10))
    (mapping square)
    (mapping inc)))
```

Our goal is to be able to use `xform` to define some function that will act as our reducing function.

```clojure
(def my-function (xform ???))

(reduce my-function [] (range 10))
; ⇒ [1 5 17 37 65]
```

And this reduce should not use intermediate collections underneath the hood.

## Our first transducer

In Clojure's actual transducer library, you create a transducer by leaving off the last argument in sequence functions. For example, `(map f)` returns a transducer. You can then compose transducers and use them like this:

```clojure
(def my-transducer (comp (filter even?) (map inc)))

(transduce my-transducer conj [] (range 10))
; ⇒ [1 3 5 7 9]
```

We'll now look at our implementation of transducer-building functions. And as I stated before, I won't go into detail as to *how* we got to these functions—read [Tom's article](http://phuu.net/2014/08/31/csp-and-transducers.html) if you're interested. Instead, we'll look at a finished implementation and analyze how they are used. I think this will give you a clear understanding of how transducers work.

Similar to `map`, we'll call our version `mapping`, to avoid confusion.

```clojure
(defn mapping [f]
  (fn [reducing]
    (fn [result input]
      (reducing result (f input)))))
```

So `mapping` is a function that returns a function that accepts a function and then returns a function. Yes, quite confusing. But hold on—let's examine this further.

We can build a transducer:

```clojure
(mapping inc)
```

This transducer is a function that looks like this:

```clojure
; (mapping inc)
(fn [reducing]
  (fn [result input]
    (reducing result (inc input))))
```

So it's waiting for a reducing function. A reducing function has the type `result, input ⟶ result`. It's used to reduce the current result-so-far with a current input into some new result-so-far.

`conj` is a reducing function, since it takes a collection, an input, and returns a new collection.

```clojure
((mapping inc) conj)
```

Observe that `((mapping inc) conj)` is another function:

```clojure
; ((mapping inc) conj)
(fn [result input]
  (conj result (inc input)))
```

We can invoke the function to see how it behaves:

```clojure
(((mapping inc) conj) [] 1)
; ⇒ [2]

(((mapping inc) conj) [2] 2)
; ⇒ [2 3]

(((mapping inc) conj) [2 3] 3)
; ⇒ [2 3 4]
```

Indeed, our function `((mapping inc) conj)` behaves like a reducing function. We can use it in `reduce`!

```clojure
(reduce ((mapping inc) conj) [] [1 2 3 4])
; ⇒ [2 3 4 5]

(reduce ((mapping inc) conj) #{} [1 2 3 4])
; ⇒ #{4 3 2 5}
```

And what if we replace `conj` with `+`?

```clojure
(reduce ((mapping inc) +) 100 [1 2 3 4])
; ⇒ 114
```

So `+` is also a reducing function. Notice `+` has the type `result, input ⟶ result`.

And since our transducer `(mapping inc)` takes `+` and returns another reducing function, this implies that transducers have the type `(result, input ⟶ result) ⟶ (result, input ⟶ result)`. Rich Hickey pointed this out in the post [Transducers are coming](http://blog.cognitect.com/blog/2014/8/6/transducers-are-coming).

To recap, a transducer expects you to give it a reducing function (e.g. `conj`, `+` or one of our own). When you do this, you get back a reducing function that you can use in `reduce`.

That's it—we have our first transducer with only a few lines of code.

## The filtering transducer

We now write `filtering`, a function that builds transducers that filter things out.

```clojure
(defn filtering [predicate]
  (fn [reducing]
    (fn [result input]
      (if (predicate input)
        (reducing result input)
        result))))
```

Like `mapper`, we build a transducer by passing our builder a function. In this case, this function is a predicate that should return a boolean. What's interesting about `filtering` when compared to `mapping`, however, is that if the predicate fails, `filtering` will not call the inner reducing function. Instead, it will short-circuit and return the current result right away.

Some concrete examples of `filtering` transducers at work:

```clojure
(((filtering even?) conj) [2 4 6] 8)
; ⇒ [2 4 6 8]

(((filtering even?) conj) [2 4 6] 9)
; ⇒ [2 4 6]

(reduce ((filtering even?) conj) [] [1 2 3 4 5 6])
; ⇒ [2 4 6]

(reduce ((filtering even?) +) 0 [1 2 3 4 5 6])
; ⇒ 12
```

Notice that when the filter fails (e.g. `9` is not even), the supplied reducing function (e.g. `conj` or `+`) is not invoked.

## Composing transducers

Recall the `xform` we had before:

```clojure
(defn square [x] (* x x))

(def xform
  (comp
    (filtering even?) 
    (filtering #(< % 10))
    (mapping square)
    (mapping inc)))
```

This may be a surprise, but `xform` is a transducer!

Recall that `(comp a b c d)` returns a function:

```clojure
(fn [r] (a (b (c (d r)))))
```

Say we invoke the new composed function by passing some `r`. In our case, `d` is the function `(mapping inc)`, which we know is a transducer. So if `r` is a reducing function, say `conj`, then we would have `((mapping inc) conj)`, which we know returns *another* reducing function. Well, this result is then passed into the function `(mapping square)`, which is another transducer. When you do that, this returns *another* reducing function. And we do this all the way to the first transducer in our composition, `(filtering even?)`.

This means that when we give a reducing function to `xform` like `(xform conj)`, we get back a function that will apply the left-most reducing function first, then down the stack until the last reducing function, `conj`, is applied to the current result and input.

Imagine this transducer is being used in some reduce function, and we have so far collected in our results the vector `[5 17]`. Say the current input in question is `12`. Since `12` is even, it will pass the first filter. This first filter will then call its reducing function, passing in `[5 17]` and `12`. In this case, the reducing function is the “rest” of the transformation, which is the second filter `#(< % 10)`. Since `12` fails the second filter, the third reducing function is not called, and the result-so-far `[5 17]` is returned.

But if the input in question is `6`, it would pass both filters and arrive at the mapping transforms, which will transform `6` to `37`. We then pass this input to the final reducing function, `conj`, which will join `[5 17]` with the new value `37`.

```clojure
((xform conj) [5 17] 12)
; ⇒ [5 17]

((xform conj) [5 17] 6)
; ⇒ [5 17 37]

(reduce (xform conj) [] (range 10))
; ⇒ [5 17 37 65]
```

Being able to compose transducers is an important pillar for transducers. We see that it's quite simple to do, and that what powers composition underneath the hood are ordinary functions.

## Transducers in core.async

Another major selling point of transducers is that a transducer can work across core.async channels. For example, we should be able to take our `xform` transducer and use it to filter and transform items in a channel.

Using Clojure's transducer library:

```clojure
(def my-chan (chan 1 xform))

(put! my-chan 3)
(take! my-chan println)
; ⇒ nil, since 3 is not even

(put! my-chan 4)
(take! my-chan println)
; ⇒ 17, since 4 is even and less than 10
```

How do transducers work across core.async channels?

First, note that channel buffers are linked lists underneath (in fact, `java.util.LinkedList`s). When you put an item into a channel, an internal helper method `add!` is called to put your item into the buffer.

But if a transducer `xform` is supplied, core.async will use `add!` as the reducing function passed into `xform`:

```clojure
(xform add!)
```

This means that any item put into a channel will first be transformed by our transducer. And if the transducer filters an item (e.g. doesn't pass `(filter even?)`), then the final reducing function `add!` is never called. Thus the item is never added to the channel's buffer.

The pertinent code can be found in the core.async sources, [here](https://github.com/clojure/core.async/blob/ac0f1bfb40237a18dc0f03c0db5df41657cd23a6/src/main/clojure/clojure/core/async/impl/channels.clj#L287).

## Conclusion

Transducers can be confusing because they're functions that accept functions and return functions. But by analyzing and using the transducer-building functions themselves, I hope that you gained a better understanding of how transducers work. They are, after all, just functions.

If you're interested in learning more, I encourage you to tackle the problems below.

# Problems sets

[Solutions can be found here](https://gist.github.com/elben/da8864e120c373e5fcf0).

**Write a `transduce` helper function**

Right now, our use of `reduce` is a bit clunky. Write a function `transduce` that will allow us to use transducers like this:

```clojure
(transduce xform conj [] (range 10))
; ⇒ [5 17 37 65]
```

**Write a `mapcat` transducer**

Write a transducer-builder for `mapcat`. Examples of `mapcat` (no transducers):

```clojure
(defn twins [x] [x x])

(mapcat twins (range 10))
; ⇒ (0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9)
```

The transducer should work like this:

```clojure
(defn mapcatting [f] ???)

(reduce ((mapcatting twins) conj) [] (range 10))
; ⇒ [0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9]
```

**Write a `take` transducer**

Write a transducer-builder for `take`. Something like this:

```clojure
(defn taking [n] ???)

(reduce ((taking 3) conj) [] (range 10))
; ⇒ [0 1 2]
```

Note that you may need to keep some state for this one. 

# References

[Understanding Transducers guide](https://gist.github.com/elben/da8864e120c373e5fcf0)

[Tom Ashwroth: CSP and transducers in JavaScript](http://phuu.net/2014/08/31/csp-and-transducers.html)

[Rich Hickey: Transducers are coming](http://blog.cognitect.com/blog/2014/8/6/transducers-are-coming)