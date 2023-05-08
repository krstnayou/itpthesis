let pts;
let caslon;

function preload(){
  caslon = loadFont('lovesavestheday.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  pts = caslon.textToPoints('LOVE SAves th~ day', 0, 0, 80,{
    sampleFactor: 1,
    simplifyThreshold: -4
  });
  
  // for(let i =0; i<pts.length; 
}

function draw() {
  background(166, 149, 169);
  
  translate(mouseX, mouseY);
  beginShape(POINTS);
  stroke(100,mouseX,mouseY);
  for(let i =0; i< pts.length; i++){
   vertex(pts[i].x + sin(frameCount*0.05 + pts[i].y*0.1)*5, pts[i].y);
  }
  endShape();
  
}