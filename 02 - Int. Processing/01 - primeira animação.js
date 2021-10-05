
//// function setup e function draw são as funções padrões da construção do código
//// frameRate serve para dizer a velocidade de cada quadro na execução do código, aumentando
//// ou diminuindo a velocidade das animações.

//// background define  a cor do fundo, e dependendo se ativado ou não a animação irá
/// comportar de forma diferente, pois quando ativado o background vai apagando o rastro
/// da forma a cada frame executado.

/// para criar uma linha escrevemos line (x1,y1,x2,y2) ou seja, um x e y inicial e final correspondendo
/// exatamente onde começa e termina o percurso da forma, seja ela qual for. *ver no caderno estudo do eixo x/y

/// aqui para gerar a primeira animação adicionamos uma variavel x = 0, que ira corresponder ao x inicial e ao x final
//// mantendo para y o valor inicial de 0 e final de 100, gerando um movimento horizontal da linha criada. O valor de 
/// 0 é incrementado com o valor de 1, fazendo com a cada frame a linha aumente um numero, dando a sensação de movimento.

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(500);
    
  }
  
  let x = 0
  
  function draw() {
    background(130);
    x += 5
    line(x,0,x,100);
    
  }