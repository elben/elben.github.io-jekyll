# Elben's personal website

http://elbenshira.com

Pushing to `master` will triger GitHub pages to compile (Jekyll) and deploy to
elbenshira.com.

# Development setup

To install, you'll need RVM. Then:

```
cd elbenshira.com
# Should auto-switch to the correct ruby and gemset (if not, do manually).
gem install bundle
bundle
```

To serve locally:

```
jekyll serve --drafts --watch
```


