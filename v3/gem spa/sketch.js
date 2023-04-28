
let str = 'GEM SPA GEM SPA GEM SPA ';

let startAngle =    0;     // angle where text should start
let distanceAngle = 360;   // how far (in degrees) text will go

let radius;                // set dynamically in setup()
let font;
let speedSlider, sizeSlider, numberSlider;
let size;


function preload() {
  font = loadFont('gemspa.otf');
}


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("footer");
  radius = min(width,height) / 5;
  
  
  speedSlider = createSlider(0,60,30);
  speedSlider.position(1530,9550);
  
  sizeSlider = createSlider(-10,10,5);
  sizeSlider.position(1530,9600);
  
  numberSlider = createSlider(-10,10,5);
  numberSlider.position(1530,9650);

  
}


function draw() {
  
  fill(255);
  textFont("Space Mono")
  textSize(18);
  text('PRESS KEY TO DOWNLOAD',200,100);
  
  let s = speedSlider.value();
  let size = sizeSlider.value();

  textSize(size*10);
  textFont(font);
  textAlign(CENTER, BASELINE);
  
  
  radius = min(width,height) / size;
  
  
  background(100,100,mouseX,s*3);
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

function windowResized() {
  setup();
}

function keyPressed(){
  
    save('my-great-proejct.png');
  
};
