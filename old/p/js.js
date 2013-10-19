// borrowed from http://userweb.cs.utexas.edu/~tfinster/
function showEmail() {
  emailSpan = document.getElementById("emailCell");
  emailSpan.innerHTML = "elbenshira@gmail.com";
}

//var bgImgWidthHeight = 1.605; // ratio for background.jpg
var bgImgWidthHeight = 1.689; // ratio for background2.jpg

resizeBg = function() {
  var wh = $(window).height();
  var ww = $(window).width();
  if(ww/wh > bgImgWidthHeight) {
    // Widow is more "widthy" than the image
    $("img#background").removeAttr("height");
    $("img#background").attr("width", ww);
    // TODO: Also set the cut offs so that the scroll bars don't appear if not
    // needed
  } else {
    // Widow is more "heighty" than the image
    $("img#background").removeAttr("width");
    $("img#background").attr("height", wh);
  }
}


$(window).resize(function() {
    resizeBg();
});

$().ready(function() {
  resizeBg();
});
