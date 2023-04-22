
let content = 'LOVE SAves th~ day'; //variable for text string
let yStart = 0; //starting position of the text wall
let customFont; //variable for custom font
var x;
let speedSlider;

function preload() {
  customFont = loadFont('lovesavestheday.ttf'); //use  preload to load the custom font
}

function setup() {
  createCanvas(windowWidth, 800);
  textFont(customFont); //use the custom font for text display
  textAlign(CENTER, CENTER); //adjust the anchor point of text alignment to the horizontal and vertical centers
  textSize(windowWidth/8); //make the text 20 pixels in size
  
  speedSlider = createSlider(0,8,4);
  speedSlider.position(50,height-50);
}

function draw() {
  let x = speedSlider.value();
  background(x*10, x*10, x*15);
  for (let y = yStart; y < height; y += windowWidth/9) { //use a for loop to draw the line of text multiple times down the vertical axis
    fill(mouseX, y / x + 55, mouseX/2); //create a gradient by associating the fill color with the y location of the text
    text(content, width / 2, y); //display text
  }
  yStart= yStart-x; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1
}