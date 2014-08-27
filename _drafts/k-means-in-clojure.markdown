---
layout: post
title:  "K-Means in Clojure"
categories: blog
tags: clojure
draft: true
---

Let's face it, the world does not need another k-means tutorial. So why does
this article exist? Because I implemented k-means to learn Clojure, and I wanted
to give some insight from a beginner's point-of-view. This article, then, is
part walkthrough and part reflection on what I've learned.

## K-means

Say that a clothing brand may want to know how they should cut
their shirts for sizes Small, Medium and Large. They can measure a bunch of
people's waists and chests and get a graph that looks something like this:

Say that a clothing brand may want to know how they should cut
their shirts for sizes Small, Medium and Large. They can measure a bunch of
people's waists and chests and get a graph that looks something like this:

### Another subheader

Say that a clothing brand may want to know how they should cut
their shirts for sizes Small, Medium and Large. They can measure a bunch of
people's waists and chests and get a graph that looks something like this:

![K-means 1](http://cl.ly/image/2R3D3u0N3w45/k-means.001.png)

Humans excel at recognizing patterns—you probably picked out three clusters
right away. But how do we get a computer to do this? This is where clustering
algorithms like k-means comes in.

**Initialization step**. In the first step of k-means, we pick three random
**centers** (three because of Small, Medium and Large) that are in the bounds of
our sample.  Something like this:

![K-means 2](http://cl.ly/image/1U2R0v0K3O3b/k-means.002.png)

**Step 1**. For each sample point, we find the closest center and associate that sample with
that center.

![K-means 3](http://cl.ly/image/392J3K333H17/k-means.003.png)

**Step 2**. Then, for each cluster, we find the *mean* point.  For example, if a
cluster had the points `(0, 0)` and `(5, 5)`, the mean would be the point `(2.5,
2.5)`. We then move the centers to that mean point. Notice, for example, how the
red center moved to the mean of the red cluster:

![K-means 4](http://cl.ly/image/2J2b0v0f2A1p/k-means.004.png)

**Repeat Step 1**. We then go through each sample again, and choose the *new*
closest center.  Notice how some some yellow samples switched from the yellow
cluster to the green cluster.

![K-means 5](http://cl.ly/image/3m3i2f0q2F1O/k-means.005.png)

**Repeat Step 2**. These steps are repeated until the centers converge (the means no longer move)
or until some pre-defined maximum number of steps. Below, we see that the
centers have convereged. We now have a cluster we can use to figure out how to
cut our Small, Medium and Large sizes to accomodate the people in the cluster.

![K-means 6](http://cl.ly/image/2z2H3C2V1g3H/k-means.006.png)

## Walkthrough and takeaways

I found that the k-means algorithm can easily be written without needing to keep
any state. This was not obvious to a beginner like myself, but Clojure's
immutable data structures guide or even force you to write code in a stateless
fashion.

And though I introduce state in the demo part of the code (written in
[Quil](https://github.com/quil/quil)), the core k-means functions remain
stateless.

The code can be found [here](https://github.com/elben/k-means/). To run the demo:

{% highlight bash %}
git clone https://github.com/elben/k-means.git
cd k-means
lein run
{% endhighlight %}

Left-click to spray points, right-click to add centers, `[Space]` to take a
step. Press `r` to reset the demo.

At the highest level, the core k-means library exposes only one function: `(defn
update-centers [points centers] ...)`, which returns an array of clusters.

For example:

{% highlight clojure %}
;; Our points are (0, 0), (5, 5) and (100, 100).
;; Our centers are (1, 1) and (90, 90).
=> (update-centers [[0 0] [5 5] [100 100]] [[1 1] [90 90]])
[[2.5 2.5] [100 100]]
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

Line 5 does what we described in **Step 1** above. It takes every point and
associates that point with the closest center. The function returns a vector of
points for each center. Here is a test for `points-to-centers`:

{% highlight clojure %}
;; Points (10, 10) and (20, 20) are associated with center 0,
;; and point (100, 100) with center 1.
(= [[[10 10] [20 20]] [[100 100]]]
   (points-to-centers [[10 10] [20 20] [100 100]]
                      [[0 0] [100 100]]))))
{% endhighlight %}

Line 6 is **Step 2** of k-means. Now that we have the cluster of points, we need
to find the mean of each cluster. This is done by executing `center-of-point` on
each cluster of points, hence the `map`.

Here is a test for `center-of-points`:

{% highlight clojure %}
(= [2.5 2.5 2.5] (center-of-points [[0 0 0] [5 5 5]]))
{% endhighlight %}

I won't go into detail of the [rest of the code](https://github.com/elben/k-means/blob/master/src/k_means/core.clj)
here, mostly because I don't think that it's very interesting (basically a lot of `map`s
and `reduce`s).

The simplicity of the code (boring, I would say) is intruiging. When I started
this project, I knew `defn`, `vec`, `map` and `reduce`. That was about it. This
project uses no fancy methods or features because functions like `map` and
`reduce` give you so much power already.

Another thing that intruigdes me is how simple the "interface" is. It is just
one function, `update-centers`. At the end of the day, the function simply takes
in a bunch of vectors and spits out other bunches of vectors. Anyone who knows
the tinest amount of Clojure can call and use this function. There is no
"secret" knowledge to learn; it is all ordinary.

Whereas in a typical object-oriented world, it's common to `class`-ify
everything because objects, not functions, rule the world (it's in the name). We
probably would have had `Point`, `Center`, `Cluster` and `KMeans` classes.
The user of the library would have to understand what each class did and who
modifies what. It is a great evil that object-oriented languages revere objects
and supress the functions that do the actual work.

I also found that immutable data structures really do simplify things. You know
what your functions ought to do, and there is no fear of unknown side-effects.
Consider this snippet:

{% highlight clojure %}
(defn center-of-points [points]
  "Return the mean center of the given points"
  ...)

(def points [[0 0] [5 5]])
(center-of-points points)
{% endhighlight %}

I don't have to worry about what may happen to `points`. Can I use `points`
again? Should I have cloned it before passing it into `center-of-points`? These
questions simply go away.

Immutability also encourages modularity. When you can't modify your data and
override your local variables, you are essentially guided towards modular
design. Instead of focusing on variables, you focus on writing small,
manageable functions.

Finally, this immutability and modularity is a tremendous help to testability.
As your functions get smaller and more modular, your tests become easier to
write and maintain because they too get smaller and more modular. This is only
natural. I also found no need for cumbersome setup/teardown procedures and
state-change verifications at the unit testing layer. Mostly because there is no
state.

## Conclusion

This project was a lot of fun. I started with knowing very little Clojure, and
finished knowing still very little. But this project revealed how compelling
Clojure's ideas are. I started not knowing how I would handle immutable data
structures, and I finished wishing every language had immutable data structures.
I started not knowing how to organize code without classes and objects, and I
finished with a great appreciation for the power of simple, ordinary functions.

Clojure really does change the way you think. I can't wait to learn more.
