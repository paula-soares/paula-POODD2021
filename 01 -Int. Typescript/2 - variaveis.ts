//pode usar pra declarar variáveis var, let e const
// quando  eu coloco que let x = 10 eu estou dizendo automaticamente sem necessariamente tipar 
// que x é do tipo number, usando let eu posso ate mudar o valor de x, mas se eu colocar algo escrito(string) da erro
// então let é permitir e const de constante, let a variavel pode mudar desde que seja do mesmo tipo do valor inicial
// atribuido,  o que no caso de const não é possível 

//EX erro: 

// let x = 10
// console.log(x);

// x = "arroz"
// console.log(x);

//EX certo: 

let x = 10
console.log(x);

x = 30 
console.log(x);

let f = "feijao"
console.log(f);

f = "farinha"
console.log(f);

let p = true
console.log(p);

p = false
console.log(p);


// tipagem de variáveis 

// pode-se atribuir as variáveis tipos, usando o typescript
// podem ser do tipo : number(numero), string(texto), boolean(v/f) 
// podem ser do tipo:  LISTAS -> number[0,1,2] string[aloka]
// pode ser do tipo any(deixa a tipagem aberta);

//EX:

let a:number = 2000 ;
console.log(a);

let c:string = "alokaaa";
console.log(c);

let d:any = 1234546
console.log(d);

// quando usamos let e const estamos falando do valor atribuido a variável 