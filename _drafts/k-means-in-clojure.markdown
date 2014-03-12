---
layout: post
title:  "K-Means in Clojure"
categories: blog
tags: clojure
---

I have this dream where I would lay on a pristine beach, the salty breeze
nipping my hair, and I would scribble perfect snippets of Lisp on linen paper,
to be typed and executed on a machine at my lesiure. And the programs would be
perfect and bug-free, because of the language and the slowness of thought and
the beach.

Not that I'm a Lisp programmer (I write mostly Ruby at work), but rumors say
that Lisp is a powerful force that sustain dreams like mine. And though I may
never write bug-free code on linen paper on the beach, I can at least see if the
rumors are indeed true. So I decided to learn Clojure. And to do that, I decided
to implement a demo of
[k-means](http://en.wikipedia.org/wiki/K-means_clustering).

This article is mostly a mash of thoughts and also a walk-through. It's not
intended to be completely accessible to Clojure beginners, but if you've had
some prior Lisp experience or functional programming, you may follow along.
Perhaps it will begin your interest in writing Lisp on linen paper.

## K-means

K-means is a simple way to automatically cluster a group of data points
together. For example, a clothing brand may want to know how they should cut
their shirts for sizes Small, Medium and Large. They can measure a bunch of
people's waists and chests and get a graph that looks something like this:

![K-means 1](http://cl.ly/image/2R3D3u0N3w45/k-means.001.png)

**Initialization step**. Do you see three potential clusters of people, grouped by Small, Medium or
Large? In the first step of k-means, we pick three random **centers** (three
because of Small, Medium and Large)that are in the bounds of our sample.
Something like this:

![K-means 2](http://cl.ly/image/1U2R0v0K3O3b/k-means.002.png)

**Step 1**. For each sample point, we find the closest center and associate that sample with
that center.

![K-means 3](http://cl.ly/image/392J3K333H17/k-means.003.png)

**Step 2**. For each cluster, we find the *mean* point. That is, the average of each axis.
For example, if a cluster had the points `(0, 0)` and `(5, 5)`, the mean would be
the point `(2.5, 2.5)`. We then move the centers to that mean point. Notice, for
example, how the red center moved to the center of the red cluster:

![K-means 4](http://cl.ly/image/2J2b0v0f2A1p/k-means.004.png)

**Repeat Step 1**. We then go through each sample again, and choose the *new* closest center.
Notice how some samples changed centers:

![K-means 5](http://cl.ly/image/3m3i2f0q2F1O/k-means.005.png)

**Repeat Step 2**. These steps are repeated until the centers converge (the means no longer move)
or until some pre-defined maximum number of steps. Below, we see that the
centers have convereged. We now have a cluster we can use to figure out how to
cut our Small, Medium and Large sizes to accomodate the people in the cluster.

![K-means 6](http://cl.ly/image/2z2H3C2V1g3H/k-means.006.png)

## Demo

To run the [demo](https://github.com/elben/k-means/), you'll need
[leiningen](http://leiningen.org/). Once you have that installed:

{% highlight bash %}
git clone https://github.com/elben/k-means.git
cd k-means
lein run
{% endhighlight %}

Left-click to spray points, right-click to add centers, `[Space]` to take a
step. Press `r` to reset the demo.

## Walkthrough

I won't go through every line of code, but I'll walk through some of the
higher-level points.

The `k-means.demo` namespace
([demo.clj](https://github.com/elben/k-means/blob/master/src/k_means/demo.clj)) holds on to two important data structures,
`points` and `centers`, the main data of k-means. When the user hits `[Space]`
to take a step in k-means, the `update-centers` is called. We pass in our
`points` and `centers`, the function calculates a new set of centers returns it.
This becomes our new `centers`.

For example:

{% highlight clojure %}
;; Our points are (0, 0) and (5, 5).
;; Our one center is (1, 1).
=> (update-centers [[0 0] [5 5]] [[1 1]])
[[2.5 2.5 2.5]]
{% endhighlight %}

The function looks like this (I've simplified it by removing error-checking
code):

{% highlight clojure linenos %}
(defn update-centers
  "The fundamental k-means step.
  Return updated centers, given points and centers."
  [points centers]
  (let [center-clusters (points-to-centers points centers)
        updated-centers (vec (map center-of-points center-clusters))]
    updated-centeres))
{% endhighlight %}

Line 5 does what we described as **Step 1** above. It takes every point and
associates that point with the closest center. The function returns a vector of
points for each center. Here is the test for the function:

{% highlight clojure %}
;; Points 10,10 and 20,20 go to center 0, and point 100,100 goes to center 1.
(= [[[10 10] [20 20]] [[100 100]]]
   (points-to-centers [[10 10] [20 20] [100 100]]
                      [[0 0] [100 100]]))))
{% endhighlight %}

Line 6 is **Step 2** of k-means. Now that we have the cluster of points, we need
to find the mean of each cluster. This is done by executing `center-of-point` on
each cluster of points, hence the `map`.

Here is the test for `center-of-points`:

{% highlight clojure %}
(= [2.5 2.5 2.5] (center-of-points [[0 0 0] [5 5 5]]))
{% endhighlight %}

That covers the core of the k-means implementation.

## Takeaways
Some things I've learned:

**Persistent data structures simplify reasoning**. You know what your functions
ought to do. There is no fear of unknown side-effects. Consider this snippet:

{% highlight clojure %}
(defn center-of-points [points]
  "Return the mean center of the given points"
  ...)

(def points [1 2 3])
(center-of-points points)
{% endhighlight %}

I don't have to worry about what may happen to `points`. Can I use `points`
again? Should I have cloned it before passing it into `center-of-points`? These
questions simply go away.

**Persistent data structures encourage modularity**. When your functions
*cannot* mutate the data, it forces you towards modular design, whether you
intended to or not.  In fact, I found that my hand is often *forced* into modular
design. I was, for example, writing this method:

{% highlight clojure %}
(defn find-closest
  [point centers]
  "Returns index of center that point is closest to, by Euclidian distance."
  ...)
{% endhighlight %}

As the comment points out, I needed to figure out the Euclidian distance between
two points.

Breaking down a large function to smaller functions becomes
natural and easy.

**Persistent data structures simplify testing**. Similar to the modularity
comment, I found that testing became much more obvious. As your functions get
smaller and more modular, your tests follow. Data in, data out. No need for
cumbersome setup and state change verifications.


When your
functions *cannot* mutate the data, it forces you towards modular design,
whether you intended to or not. Breaking down a large function to smaller
functions becomes natural

https://github.com/elben/k-means/
