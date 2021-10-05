function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(30)
  }


let pinicial = 0

function draw() {
  pinicial += 20
  background(20);

  /// circulo 
  
  if (pinicial >= width)
    pinicial = 0
  
  fill(254,20,34);
  stroke(0,258,245);
  strokeWeight(5);
  circle(pinicial, height/5,100);
  
}