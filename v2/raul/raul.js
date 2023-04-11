var landis;
var widthSlider, rSlider, gSlider, bSlider, oSlider, sSlider;
var checkbox;



function preload(){
  landis = loadFont('raul.ttf');

}

function setup() {
  createCanvas(windowWidth, 800);
  
  fill(255);
  checkbox = createCheckbox('Filled', true);
  checkbox.changed(myCheckedEvent);
  checkbox.position(100,700);
  
  widthSlider = createSlider(0,255,100);
  widthSlider.position(100,600);
  rSlider = createSlider(0,255,100);
  rSlider.position(300,600);
  gSlider = createSlider(0,255,100);
  gSlider.position(300,650);
  bSlider = createSlider(0,255,100);
  bSlider.position(300,700);
  oSlider = createSlider(0,255,100);
  oSlider.position(500,600);
  sSlider = createSlider(1,12,6);
  sSlider.position(500,700);
  
}


function draw() {
  
  const w = widthSlider.value();
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  const o = oSlider.value();
  const s = sSlider.value();
  
  
  background(0);
  textSize(w);
  textFont(landis);
  fill(r,g,b,o);
  text("abcd efghi jklmn", width/2-300,250);

  textFont('helvetica');
  fill(255);
  textSize(12);
  text("WIDTH", 100,580);
  text("FILL/OUTLINE", 100,680);
  text("COLOR", 300,580);
  text("OPACITY",500,580);
  text("STROKE",500,670);
  
}


function myCheckedEvent(){
  if (checkbox.checked()){
    fill(100,100,100);
  } else{
    noFill();
    stroke(100,100,100);
    strokeWeight(s);
    
  }
}