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

So it's waiting for a reducing function. What's a reducing function? In our beginning examples, we used `conj` in our `reduce` calls. Well, here we can also use `conj` as our reducing function.

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

Interesting—it seems that our function `((mapping inc) conj)` behaves like a reducing function. This means that we can use it in `reduce`!

```clojure
(reduce ((mapping inc) conj) [] [1 2 3 4])
; ⇒ [2 3 4 5]

(reduce ((mapping inc) conj) #{} [1 2 3 4])
; ⇒ #{4 3 2 5}
```

And what if we replace `conj` with `inc`?

```clojure
(reduce ((mapping inc) +) 100 [1 2 3 4])
; ⇒ 114
```

We see here that our transducer `(mapping inc)` should be used together with a reducing function (e.g. `conj`, `+`, our own function) and some initial state (e.g. `[]`, `#{}`, `100`).

That's it—we have our first transducer with only a few lines of code.

## The filtering transducer

We now write `filtering`, the function that builds transducers that filter things out.

```clojure
(defn filtering [predicate]
  (fn [reducing]
    (fn [result input]
      (if (predicate input)
        (reducing result input)
        result))))
```

Like `mapper`, we build a transducer by passing our builder a function. In this case, this function is a predicate that should return a boolean. What's interesting about `filtering` compared to `mapping`, however, is that if the predicate fails, it will not call the inner reducing function. Instead it short-circuits and returns the current result.

Some concrete examples of `filtering` transducers at work:

```clojure
(((filtering even?) conj) [2 4 6] 9)
; ⇒ [2 4 6]

(((filtering even?) conj) [2 4 6] 8)
; ⇒ [2 4 6 8]

(reduce ((filtering even?) conj) [] [1 2 3 4 5 6])
; ⇒ [2 4 6]

(reduce ((filtering even?) +) 0 [1 2 3 4 5 6])
; ⇒ 12
```

Notice that when the filter fails (e.g. `9` is not even), then the supplied reducing function (e.g. `conj` or `+`) is not invoked.

## Composing transducers

Recall the `xform` we had before:

```clojure
(def xform
  (comp
    (filtering even?) 
    (filtering #(< % 10))
    (mapping square)
    (mapping inc)))
```

Imagine this transducer is being used in some reduce function, and we have so far collected in our results the vector `[5 37]`. Say the current input in question is `12`. Since `12` is even, it will pass the first filter. This first filter will then call its reducing function, passing in `[5 37]` and `12`. In this case, the reducing function is the “rest” of the transformation, which is the second filter `#(< % 10)`. Since `12` fails the second filter, the third reducing function is not called, and the result-so-far `[5 37]` is returned.

But if the input in question is `8`, it would pass both filters and arrive at the mapping transforms, which will transform `8` to `65`. These reducing functions would then somehow combine `65` with the vector `[5 37]`. But how do we combine it? We're still missing a final reducing function—one that will reduce the current result `[5 37]` with the new value `65`.

A sensible thing to do would be to `conj` `65` into `[5 37]`. So we choose `conj` by passing this in as the final reducing function into the `xform` transducer.

```clojure
(xform conj)
```

And now, we can now use `xform`!

```clojure
(reduce (xform conj) [] (range 10))
; ⇒ [5 17 37 65]
```

Observe that the transducers run left-to-right, whereas `comp` applies right-to-left. This is because `((comp a b c) x)` expands to `(a (b (c x)))`. And so when we pass in our final reducing function `(xform conj)`, we get back a function that will apply the top-most reducing function first, then down the stack until the last reducing function `conj` is applied to the current result and input.

## Conclusion

Transducers can be confusing because they're functions that accept functions and return functions. But by analyzing and using the transducer-building functions themselves, I hope that you gained a better understanding of how transducers work. They are, after all, just functions.

If you're interested in learning more, I encourage you to tackle the problems below.

# Problems sets

Solutions can be found in [this repo](http://github.com/elben/).

**Write a `transduce` helper function**

Right now, our use of `reduce` is a bit clunky. Write a function `transduce` that will allow us to use transducers like this:

```clojure
(transduce xform conj [] (range 10))
; ⇒ [5 17 37 65]
```

**Write a `flatmap` transducer**

Write a transducer-builder for `flatmap`. Something like this:

```clojure
(defn flatmapping [f] ???)

(defn twins [x] [x x])

(reduce ((flatmapping twins) conj) [] (range 10))
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

**Explore how transducers work with core.async**

I have no idea!

# References

[Tom Ashwroth: CSP and transducers in JavaScript](http://phuu.net/2014/08/31/csp-and-transducers.html)

[Rich Hickey: Transducers are coming](http://blog.cognitect.com/blog/2014/8/6/transducers-are-coming)

# Saved snippets

DON'T READ THIS! OUT OF DATE.

How does this all work?

Let's simplify our `xform` function:

```clojure
(def xform
  (comp
    (filtering even?) 
    (mapping square)))
```

If we expand `(xform conj)`, we get:

```clojure
(xform conj)

; expands to

((comp (filtering even?) (mapping square) conj)

; evaluates to

((filtering even?) ((mapping square) conj))
```

Recall that `(filtering even?)` and `(mapping square)` return transducers, and transducers are functions that take a reducing function.

Expanding `(mapping square)`:

```clojure
(defn mapping [f]
  (fn [reducing]
    (fn [result input]
      (reducing result (f input)))))

; evaluate, substituting f with square

(fn [reducing]
  (fn [result input]
    (reducing result (square input))))
```

So `((mapping square) conj)` evaluates to

```clojure
(fn [reducing]
  (fn [result input]
    (reducing result (square input))))

; evaluate, substituting reducing with conj

(fn [result input]
  (conj result (square input)))
```

We pass the result of `((mapping square) conj)` into `(filtering even?)`. We can evaluate `(filtering even?)` to:

```clojure
(filtering even?)

; expands to

(defn filtering [predicate]
  (fn [reducing]
    (fn [result input]
      (if (predicate input)
        (reducing result input)
        result))))

; substituting predicate with even?

(fn [reducing]
  (fn [result input]
    (if (even? input)
      (reducing result input)
      result)))
```

So now we evaluate

```clojure
((filtering even?)
  (fn [result input]
    (conj result (square input))))

; evaluating (filtering even?)

((fn [reducing]
  (fn [result input]
    (if (even? input)
      (reducing result input)
      result)))
  (fn [result input]
    (conj result (square input))))

; function application

(fn [result1 input1]
  (if (even? input1)
    ((fn [result2 input2]
       (conj result2 (square input2)))
     result1 input1)
    result1))
```

OK that was a lot. All that means, `xform` is this function

```clojure
(fn [result1 input1]
  (if (even? input1)
    ((fn [result2 input2]
       (conj result2 (square input2)))
     result1 input1)
    result1))
```

TODO: try to add the js bin thing?
- http://cognitect.github.io/transit-tour/
- https://github.com/kanaka/clojurescript

--—