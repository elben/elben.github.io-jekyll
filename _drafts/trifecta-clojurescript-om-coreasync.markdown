---
layout: post
title: "The Trifecta of ClojureScript, Om and core.async"
categories: blog
tags: clojure
---

*This post is an adaptation of my lighting talk given at Austin JS.*

Perhaps present this article in a different way. Three pronged attack on three problems, comparing JavaScript to the better solution:

- mutable state
- spaghetti state machine
- dealing with asynchronous interfaces

I’m bad at front-end development. The JavaScript, Backbone and DOM house of straw I tie together often get the stink eye from my competent peers. But that doesn’t mean that I *dislike* it—I enjoy building interfaces and browser applications.

Yet again and again at every attempt my Backbone models and views transform into a spaghetti state machine that I timidly pass off to the competent with some casual suggestions on how it “could be improved.” But I know for the most part that it’s quite hopeless, and the only sane way forward is to rewrite.

Who is to blame? Naturally, myself. Laziness, ignorance, hurriedness, insipidness, and on and on. And of course there are many browser apps out there that do not taste like a spaghetti state machine, and I too could be part of the competent if only I would spend the time to learn how to do it the right way.

But I don’t think the fault is completely mine. I think that the tools we have been given are indeed thin straws and stringy ropes. Given the complexity of asynchronous user interfaces and the need to orchestrate state between many components, we simply need better tools. It’s ridiculous that so many of us are basically, at the end of the day, simply wrangling our DOM to look like the thing we want.

Is there something better *and* easier?

I think there is.

I am not prophetic enough to declare that what I’m presenting here is *the* solution. It is never that easy. But I do think that the ideas brought by Clojure, Om (via React) and core.async are game changers. And so, even if you have a disdain for Lisp or alternative JS implementations or whatever, I believe that these ideas are so good that it would be a shame for you to miss out on it.

## Taking back control of your state

*If you're not familiar with Clojure syntax, you may want to read [this quick primer](/pages/clojure-prelim-js/).*

Clojure (and ClojureScript) data structures are immutable. You cannot, for example modify a Clojure map by adding a new element to it; you must make a “copy”. Most programmers, for example, prefer that the number `0` always stay the number `0`. The number `0` is considered a *value* that cannot change. Clojure extends this idea to data structures like maps.

To understand why this is important, let's see how mutable JavaScript data structures behave. There is, for example, no good sense of object equality:

```javascript
o1 = {foo: 0};
o2 = {foo: 0};
o1 == o2;
// false
```

And if you pass your object to some function, you have no idea what that other function may potentially do to your object.

```javascript
o = {foo: 0};
g(o);  // Your co-worker wrote this

// What is o?
```

You can try cloning your object before passing it to `g`, but now you have to decide if you should do a shallow clone or a deep clone. And just how deep is deep? One layer? All the way until you hit primitives?

Clojure's immutable data structures, on the other hand, gives us meaningful equality:

```clojure
(= {:foo 0 :bar {:car "far"}}
   {:foo 0 :bar {:car "far"}})
;; ⇒ true

;; Corresponding JavaScript object:
;; {foo: 0, bar: {car: "far"}}
```

And there is no need to clone:

```clojure
(def o {:foo 0})
(g o) ; Corresponding JavaScript: g(o)

;; o is still o
(= o {:foo 0})
;; ⇒ true
```

Immutability seems restrictive at first, but in practice these restrictions free you.

As seen above, immutability frees us to treat objects like values. You prefer, for example, that `1 == 1` and `"far" == "far"`. So why do we put up with `{foo: 0} != {foo: 0}`?

Immutability also encourages modularity. When you can't modify your data and override your local variables, you unwittingly focus less on your variables and state and you begin to write smaller, more manageable functions.

And lastly, immutability also prevents you from building complex state spaghetti. The Clojure map `{:name "Ayo", :email "ayo@example.com"}` is not a stateful object that anyone can add to, remove from or modify—that map is a *value*, and the value is `{:name "Ayo", :email "ayo@example.com"}`.

Mutable objects, on the other hand, allow undiscerning programmers to modify state at inopportune times. Consider, for example, the User model below:

```javascript
var User = function (name, email) {
  this.name = name;
  this.email = email;

  this.isValid = function () {
    if (this.name.length > 100 ||
        this.email.indexOf("@") === -1) {
      return false;
    }
    return true;
  };

  this.resetEmail = function () {
    this.email = "";
  };

  this.magic = function () {
    // …
    this.resetEmail();
    // …
  };

  this.save = function () { /* … */ };

  return this;
};
```

And now let's use it:

```javascript
var u = User("Ayo", "ayo@example.com")
if (u.isValid()) {
  // …
  if (somePredicate) { u.magic(); }
  // …
  u.save(); // Oops, saved invalid email.
}
```

Obviously this is a contrived example, but in a large code base with many collaborators, mistakes like this are common.

And yes, we can do a number of things to mitigate disasters like the one above. We can emphasize good coding styles. We can enforce code reads that will hopefully catch such errors. These things are possible, but hard to do. For example, what if the commit was adding the single line `if (somePredicate) { u.magic(); }`? Is the code reader expected to know what `magic()` does through and through? But with immutable data structures, the data structures and compiler enforces all of this for you, for free.

The conclusion is simple: immutability prevents you from doing stupid things, and frees you to treat objects like values (because they are).

## Om (and React)

While there are a lot of [articles](http://blog.getprismatic.com/om-sweet-om-high-functional-frontend-engineering-with-clojurescript-and-react/) and [videos](https://www.youtube.com/watch?v=DMtwq3QtddY) that explain [Om](http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/) and [React](http://facebook.github.io/react/), I like to think of an Om application as a function $f$ that takes your global application state $s$ and returns a $DOM$.

$$f(d) \Rightarrow DOM$$

Your application state 

In Om (and React), instead of writing raw HTML, you build virtual DOM elements. For example:

```clojure
;; Renders "Hello `name`", where `name` is retrieved
;; from the global state.
(dom/div
  #js {:className "greeting"}
  (str "Hello" (:name state)))
```

In React JSX, this may look like this:

```
<div className="greeting">Hello {this.props.name}</div>;

// Compiled JS:
// React.DOM.div({className: "greeting"}, "Hello ", this.props.name);
```

This builds a *virtual* DOM—objects controlled by the React framework. At every predefined tick, React will take your virtual DOM, check which elements have changed and render the actual DOM.

So, as your program state changes over time, Om automatically re-renders the components that depend the changed state, producing the DOM represented by your state.

$$f(s\_0) \Rightarrow \mathit{DOM}\_0$$

$$f(s\_1) \Rightarrow \mathit{DOM}\_1$$

$$f(s\_2) \Rightarrow \mathit{DOM}\_2$$

Given a page number of a book, you know that the contents will be the same *every single time*. And your fingers flipping to the page acts as your function: $\mathit{fingers}(\mathit{page}) \Rightarrow \mathit{contents}$. Books are immutable.

Can we do the same for our programs? Can we pass in a state and get the UI at that given state?

In many JavaScript applications, this is very hard to do. You must you employ and follow strict guidelines in your code.

But in ClojureScript and Om, this is almost trivial. Remember that Clojure data structures are immutable. And your Om rendering function $f$ is referentially transparent—it will always produce the same output DOM for a given input state.

Thus, if we save all our states $[s\_0, s\_1, s\_2, …]$, we can simply choose a state to feed to our function and get back the UI for that state. This makes [time travel](http://swannodette.github.io/2013/12/31/time-travel/) (e.g. undo/redo) easy.


# References

[David Nolen - The Final Frontier](https://www.youtube.com/watch?v=DMtwq3QtddY)

[The future of JavaScript MVCs](http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/)

[Time Travel](http://swannodette.github.io/2013/12/31/time-travel/)

[Om sweet Om](http://blog.getprismatic.com/om-sweet-om-high-functional-frontend-engineering-with-clojurescript-and-react/)

https://github.com/facebook/immutable-js