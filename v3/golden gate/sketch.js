let pts, ptss;
let caslon;

function preload(){
  caslon = loadFont('goldengate.otf');
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  

}

function draw() {
  background(217, 157, 101);
  translate(mouseX, mouseY);
  
    pts = caslon.textToPoints('abcdef ghij', 130, 0, 120,{
    sampleFactor: 0.25,
    simplifyThreshold: 1
  });
    ptss = caslon.textToPoints('ABCDEFGHIJKLMNOPQRSTU', 0, 10, 120,{
    sampleFactor: 0.25,
    simplifyThreshold: 1
  });
  
  
  translate(0, 100);
  beginShape(POINTS);
  stroke(0,0,0,100);
  endShape();
  
  translate(0, 100);
	noFill();
  let rotX = mouseX/10;
  let rotY = mouseY/20;
  
  console.log(rotX);
  for(let i =0; i< pts.length; i++){      
    line(pts[i].x, pts[i].y, pts[i].x - rotX, pts[i].y - rotY);
  }
  
  for(let i =0; i< ptss.length; i++){      
    line(ptss[i].x, ptss[i].y, ptss[i].x - rotX, ptss[i].y - rotY);
  }
  
  textFont(caslon);
  textSize(120);
  text('abcdef ghij', 130, 0);
  text('ABCDEFGHIJKLMNOPQRSTU', 0, 10);
  fill(150,mouseX,100,50);
  text('abcdef ghij', -rotX+130, -rotY);
  text('ABCDEFGHIJKLMNOPQRSTU', -rotX, -rotY+10);
  

  
}