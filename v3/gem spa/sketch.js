// A p5.gui Template feat. Pacman

// gui params

let str = 'GEM SPA GEM SPA GEM SPA ';

let startAngle =    0;  
let distanceAngle = 360; 
let radius, speedSlider, sizeSlider, size;
var SPEED = 30;
var SIZE = 5;

var gui;

function preload() {
  font = loadFont('gemspa.otf');
}

function setup() {

  createCanvas(windowWidth, 800);
    radius = min(width,height) / 5;


  // Create the GUI
  sliderRange(0, 60, 1);
  gui = createGui('SHAPE');
  gui.addGlobals('SPEED');
  
  sliderRange(-10, 10, 1);
  gui.addGlobals('SIZE');
  
  
}


function draw() {
  let s = SPEED;
  let size = SIZE;
  
  textSize(size*10);
  textFont(font);
  textAlign(CENTER, BASELINE);
  
  radius = min(width,height) / size;
  
  console.log(size);
  
  background(100,100,s*3,s*3);
  frameRate(s);
  
  // the circle our text will go around
  noFill();
  noStroke();
  circle(width/2,height/2, radius*2);
  
  // calculate the angle between each letter
  let angleBetweenLetters = radians(distanceAngle) / str.length;
  
  // display the text!
  push();
  translate(width/2, height/2);        // move to circle's center
  rotate(radians(startAngle));         // rotate to where text starts
  for (let i=0; i<str.length; i++) {   // go through each letter in the text
    push();
    rotate(i * angleBetweenLetters);   // rotate to angle
    translate(0,-radius);              // and translate to edge of circle
    fill(255);
    noStroke();
    text(str[i], 0,0);                 // draw character at location
    pop();
  }
  pop();
  
  startAngle = startAngle+1;
}


// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}