// Create variable we can use anywhere
var w, h;
var step, vStep;
var spots = [];
var c1, c2, c3, c4;

// This runs just once when the program starts
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("footer");
  w = 20;
  step = width / w;
  vStep = step * sin(PI / 3);
  h = floor(height / vStep);
  c1 = 50;
  c2 = 100;
  c3 = 150;
  c4 = 200;
  c1 = c2 = c3 = c4 = 0;
  rectMode(CENTER);
  background(0);
  noLoop();
}

function preload() {
  font = loadFont('gemspa.otf');
}

//This runs each frame (60 per second) unless we call noLoop()
function draw() {
   textFont(font);
  
  if(frameCount===1){
    for (var j = 0; j < h; j++) {
      for (var i = 0; i < w; i++) {
        makeShape(i,j);
      }
    }
  } else {
    i=floor(random(w));
    j=floor(random(h));
    makeShape(i,j);
  }
}

function mousePressed(){
  background(0);
  draw();
}

function makeShape(i,j) {
  push();
  //move drawing position to the square i across and j down
  translate((i + 0.5) * step, (j + 0.5) * step);
  //blank anything already there with a blank square
  fill(0);
  rect(0,0,step, step);
  stroke(255);

  var choice = floor(random(6));
  if (choice === 0) {
    fill(224, 212, 72);
    noStroke();
    textSize(random(20,40))
    text('G', 0, 0);
  } else if (choice === 1) {
    fill(140, 21, 0);
    noStroke();
    textSize(random(20,40))
    text('E', 0, 0);
  } else if (choice === 2) {
    noStroke();
    fill(224, 212, 72);
    textSize(random(20,40))
    text('M', 0, 0);
  } else if (choice === 3) {
    noStroke();
    fill(140, 21, 0);
    textSize(random(20,40))
    text('S', 0, 0);
  } else if (choice === 4) {
    noStroke();
    fill(224, 212, 72);
    textSize(random(20,40))
    text('A', 0, 0);
  } else if (choice === 5) {
    //leave a blank space
  }
  pop();
}