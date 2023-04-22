let str = 'FORGET ME NOT FORGET ME NOT ';

let startAngle =    0;     // angle where text should start
let distanceAngle = 360;   // how far (in degrees) text will go

let r;                // set dynamically in setup()
let font;
let speedSlider, sizeSlider;
let size;



function setup(){
  createCanvas(250,250);
  r = min(width,height) / 7;
}

function draw(){
  background(188, 202, 231);

  fill(23, 39, 73);
    textSize(55);
    textFont('kepler-std-display');
  text('404', width/2+3,height/2+15);

  textSize(22);
  textFont('halyard-display');
  textAlign(CENTER, BASELINE);


  r = 70;
  
  console.log(size);
  
  frameRate(25);
  
  // the circle our text will go around
  noFill();
  noStroke();
  circle(width/2,height/2, 200);
  
  // calculate the angle between each letter
  let angleBetweenLetters = radians(distanceAngle) / str.length;
  
  // display the text!
  push();
  translate(width/2, height/2);        // move to circle's center
  rotate(radians(startAngle));         // rotate to where text starts
  for (let i=0; i<str.length; i++) {   // go through each letter in the text
    push();
    rotate(i * angleBetweenLetters);   // rotate to angle
    translate(0,-r);              // and translate to edge of circle
    noFill();
    stroke(23, 39, 73);
    text(str[i], 0,0);                 // draw character at location
    pop();
  }
  pop();
  
  startAngle = startAngle+1;
}


// to make this sketch responsive to the window size
// being changed, the windowResized() function calls
// setup() so we can change the radius and font size
function windowResized() {
  setup();
}
