function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(100);
  }
  
  let circulox = 0;
  let circuloy = 0;
  let velox = 10
  let veloy = 10
  let diam = 50
  let raio = diam/2
  
  function draw() {
   background(0);
  
  
  ////mover o circulo, nessa nova relação acaba fazendo com que a bola "suma"
  circulox += velox;
  circuloy += veloy;
    
    if(circulox + raio >= width)
      velox *= -1;
    if(circuloy + raio >= height)
      veloy *= -1;
  //// para impedir que as bolinhas saiam
    if(circuloy + raio < 0)
      veloy *= -1;
     if(circulox + raio < 0)
      velox *= -1;
    
  //// não entendi muito como chegou nessa relação da parte do final 
  //// circulo em si  
    
    circle(circulox,circuloy,50);
     
  }