/// aqui criaremos uma animação onde a linha(x1,y1,x2,y2) que sai de um ponto x e y definido no centro da tela e atinge
/// um ponto x e y final randomico, o que o prof. chama de efeito discoteca.

/// para definir um ponto central na tela, usamos width/2 e height/2 e fica assim, mas esse central depende
/// tambem de outros valores 

function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
  //  background(130);
      line(width/2,height/2,random(width),random(height));
      /// aqui estou dizendo pra linha partir de um ponto x e y central e atingir um ponto x e y randomico.
  }

  ///obs o width e o height quando usados fora do createcanvas usa-se a primeira letra miniscula. 

/// aqui adicionamos no código anterior a função stroke(), o stroke define a cor da linha que estamos trabalhando
/// além do stroke, adicionamos o random dentro do stroke produzindo cores aleatorias dentro do recorte dado
/// pelo numero 255, verde, além disso coloquei o 90 para adicionar alguns azuis, 
/// ainda na linha adicionamos o strokeWeight, weight é o peso/expessura da linha, saindo de traços mais finos 
/// coloquei o numero 10 no frameRate o que define a velocidade da animação. 
/// coloquei também o random no ultimo valor do stroke, trazendo opacidades diferentes a linha. 

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(10)
}

function draw() {
  
  background(0);
  
  stroke(0,random(255),90,random(100));
  strokeWeight(random(20));
  line(width/2,height/2,random(width),random(height));

}