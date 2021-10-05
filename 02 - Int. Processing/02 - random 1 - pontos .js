/// a proposta aqui é criar bolinhas em toda pagina de forma aleatória
/// adicionamos no function draw a função point(x,y), com dois valores.
/// no caso ao adicionarmos um valor randomico de largura e de altura random((width),random(height))
/// várias bolinhas serão espalhadas no espaço da tela  
/// podemos falar tb que width é a largura máxima e é representado pelo eixo x e height é a altura máxima, representado
/// pelo eixo y. 

function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
  //  background(130);
    point(random(width),random(height));
  }