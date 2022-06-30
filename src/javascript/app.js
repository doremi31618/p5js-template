
var data = [];
var width = 400, height = 400;
function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    canvas.class("p5canvas");
  }
  
  function mousePressed(){
    let x = map(mouseX, 0, window.innerWidth, 0, 1);
    let y = map(mouseY, 0, window.innerHeight, 1, 0);
    let point = createVector(x, y);
    data.push(point);
  }

  function draw() {
    background(0);

    for(let p of data){
      let x = map(p.x, 0, 1, 0, window.innerWidth);
      let y = map(p.y, 0, 1, window.innerHeight, 0);
      fill(255);
      stroke(255);
      ellipse(x, y, 8, 8);
    }
  }

  window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w, h);
    width = w;
    height = h;
  }

  window.setup = setup;
  window.draw = draw;
  window.mousePressed = mousePressed;