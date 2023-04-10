let str = 'GEM SPA GEM SPA GEM SPA ';

let startAngle =    0;     // angle where text should start
let distanceAngle = 360;   // how far (in degrees) text will go

let radius;                // set dynamically in setup()
let font;
let speedSlider, sizeSlider;
let size;


function preload() {
  font = loadFont('gemspa.otf');
}


function setup() {
  createCanvas(windowWidth, 800);
  radius = min(width,height) / 5;
  
  // radius is set dynamically depending on the
  // sketch's size – the min() function gives
  // us the smaller of two numbers, ensuring
  // that the circle won't get cut off
  
  // font size is also dynamic!
  
  speedSlider = createSlider(0,60,30);
  speedSlider.position(50,windowHeight-100);
  
  sizeSlider = createSlider(-10,10,5);
  sizeSlider.position(200,windowHeight-100);

  
}


function draw() {
  let s = speedSlider.value();
  let size = sizeSlider.value();
  
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


// to make this sketch responsive to the window size
// being changed, the windowResized() function calls
// setup() so we can change the radius and font size
function windowResized() {
  setup();
}

function keyPressed(){
  
    save('my-great-proejct.png');
  
}

