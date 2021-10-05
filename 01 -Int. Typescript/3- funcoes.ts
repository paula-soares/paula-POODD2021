// funções são parte do códdigo que iremos reaproveitar seja atribuindo uma variavel
// ou chamando a  função em especifico para executar ali o que foi previamente estabelecido

// FUNÇÃO EM JAVASCRIPT que retorne a+b pode ser:

// function somar (a,b){
//     return a+b;
// }

// FUNÇÃO EM TYPESCRIPT 1
// que retorne a+b pode ser:
// function|declara que é uma função| adicionar|nome da função| (a:number,b:number):number |declara uma variavel e um tipo pra ela e diz qual tipo é o resultado da função, no caso number tb
// e abre chaves que é onde você coloca a operação da funçao no caso return | retorne a+b | e fecha chaves 
// EXEMPLOS:

function somar(a:number,b:number):number{
    return a+b;
}

console.log(somar(10,20));

function subtrair(a:number,b:number):number{
    return a-b;
}

console.log(subtrair(80,50));

function multiplicar(a:number,b:number):number{
    return a*b;
}

console.log(multiplicar(20,10));

function dividir(a:number,b:number):number{
    return a/b;
}

console.log(dividir(50,5));

// FUNÇÃO EM TYPESCRIPT 2 ( funcão anônima )
// na função anonima ao inves de dar um nome a função ela vai estar como valor declarado de uma variavel
// e é a variavel que "da o nome" da função

// EX:

let somar1 = function (a:number,b:number):number{
    return a+b;
}

console.log(somar1(10,30));

let subtrair1 = function(a:number,b:number):number{
    return a-b;
}

console.log(subtrair1(50,30));

let dividir1 = function(a:number,b:number):number{
    return a/b;
}

console.log(dividir1(100,20));


let multiplicar1 = function(a:number,b:number){
    return a*b;
}

console.log(multiplicar1(20,5));

// FUNÇÃO EM TYPESCRIPT 3 ( arrow function )
// o arrow function é tambem uma função anonima, mas ao inves de declarar ela usando function
// usamos o => 

//EX:

let somar2 = (a:number,b:number):number =>{
    return a+b;
}

console.log(somar2(140,45));

let dividir2 = (a:number,b:number):number =>{
    return a/b;
}

console.log(dividir2(400,20));

let subtrair2 = (a:number,b:number):number =>{
    return a-b;
}
console.log(subtrair2(90,10));

let multiplicar2 = (a:number,b:number):number => {
    return a*b;
}

console.log(multiplicar2(5,8));

// FUNÇÃO EM TYPESCRIPT 3.1 ( arrow function resumido ) neste caso não é necessario nem o uso do function nem do return
// pode ser usada nessas funções mais simples pra retornar o resultado de dois valores 

let somar3 = (a:number,b:number):number => (a+b);

console.log(somar3(20,800));

let subtrair3 = (a:number,b:number):number => (a-b);

console.log(subtrair3(900,53));

let dividir3 = (a:number,b:number):number => (a/b);

console.log(dividir3(80,4));

let multiplicar3 = (a:number,b:number):number => (a*b);

console.log(multiplicar3(20,8));


