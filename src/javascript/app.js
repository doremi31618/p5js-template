
function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    canvas.class("p5canvas");
  }

  function draw() {
    background(0);
  }

  window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w, h);
    width = w;
    height = h;
  }