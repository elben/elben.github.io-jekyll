 
var Clustering = function () {
  // Data points. This array will contain points (array of two elements).
  this.data = [];
 
  // Points describing the centers. Each center is associated with its index in
  // the array. For example, if this.centers is [[5, 5], [10, 10]], this means
  // that we have two centers. Center 0 is [5, 5] and center 1 is [10, 10].
  this.centers = [];
 
  // Clusters. Array of arrays containing points. Each center is associated with
  // its array index (e.g. center 0 is index 0), which is an array of points.
  //
  // Starts empty. Must call findCenters to fill.
  this.clusters = [];
 
  // Clusters this.data into this.clusters. Clears any old this.clusters state.
  this.cluster = function (numClusters) {
    this.clusters = [];
    this.generateCenters(numClusters);
 
    for (var i = 0; i < 20; i++) {
      this.findCenters();
      this.moveCenters();
    }
  };
 
  // Associates each data point with a center.
  //
  // Returns an array of clusters, wehre the index of the array corresponds to
  // the center number. For example, the array below is of two clusters:
  //
  // [[[0, 0], [1, 1]], [[10, 10]]]
  //
  // In the above example, cluster 0 has two points, (0, 0) and (1, 1). Cluster
  // 1 has one point, (10, 10).
  //
  this.findCenters = function () {
    if (this.centers.length == 0) {
      return [];
    }
 
    this.clusters = Array(this.centers.length);
 
    for (var pi = 0; pi < this.data.length; ++pi) {
      var datum = this.data[pi];
 
      var ci = this.findClosestCenter(datum);
 
      if (!clusters[ci]) {
        clusters[ci] = [];
      }
 
      clusters[ci].push(datum);
    }
 
    return clusters;
  };
 
  this.moveCenters = function () {
    if (this.clusters.length == 0) {
      // Nothing to do.
      return;
    }
 
    var newCenters = [];
 
    for (var i in this.clusters) {
      var points = this.clusters[i];
      newCenters.push(this.mean(points));
    }
    this.centers = newCenters;
  };
 
  // point is a point array (e.g. [1, 1]).
  //
  // Returns the cluster index closest to point.
  this.findClosestCenter = function (point) {
    if (this.centers.length == 0) {
      return undefined;
    }
 
    var minCenter;
    var minCenterDistance = Infinity;
 
    for (var ci = 0; ci < this.centers.length; ++ci) {
      var center = this.centers[ci];
      var d = this.euclidDistance(point, center);
      if (d < minCenterDistance) {
        minCenterDistance = d;
        minCenter = ci;
      }
    }
 
    return minCenter;
  }
 
  // Returns mean from list of points.
  this.mean = function (points) {
    if (points.length === 0) {
      return null;
    }
 
    var sumX = 0;
    var sumY = 0;
    for (var i in points) {
      sumX += points[i][0];
      sumY += points[i][1];
    }
 
    return [parseInt(sumX/points.length), parseInt(sumY/points.length)];
  };
 
  // Returns distance between two points.
  this.euclidDistance = function (p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
  };
 
  // Randomly generate centers.
  this.generateCenters = function (num) {
    this.centers = [];
    for (var i = 0; i < parseInt(num); ++i) {
      x = this.randomInt(0, 600);
      y = this.randomInt(0, 400);
      this.centers.push([x, y]);
    }
  };
 
  // Data is an array of [x, y] coordinates.
  this.importData = function (data) {
    this.data = [];
    for (var i in data) {
      this.data.push([parseInt(data[i][0]), parseInt(data[i][1])]);
    }
  };
 
  // Random number, min (inclusive) to max (exclusive).
  this.randomInt = function (min, max) {
    var diff = max - min;
    return min + Math.floor(Math.random() * diff);
  };
 
  return this;
};
