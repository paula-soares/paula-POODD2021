
function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(10)
  }
  
function draw() {
    
  ///  background(0);
    
stroke(0,random(255),90,random(500));
strokeWeight(random(5));
line(0,random(height),width,random(height));
    
  }

/// aqui temos um ponto inicial x = 0, então a linha fica exatamente encostada, o y inicial é randomico, 
/// assumindo diferentes alturas, mas sempre partindo do x = 0, o x final é valor máximo de largura, então a linha
/// vai atravessar de uma ponta a outra perfeitamente, e mais uma vez a altura final é um valor randomico. 

