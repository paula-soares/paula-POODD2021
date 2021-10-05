//// vamos criar um quadrado rect (x,y,a,l) 
/// e vamos criar um circulo, que é diferente do ponto
// ponto é point(x,y) e circulo é (x,y,d) onde d é diametro.

//// começando criando só o quadradinho :

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(10)
  }
  
function draw() {
    
  ///  background(20);
  
  fill(20);
  stroke(0,258,245);
  strokeWeight(5)
  rectMode(CENTER)
  rect(width/2, height/2,100,100)
    
  }
