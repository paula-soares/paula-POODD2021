// importante lembrar que em listas  o valor de contagem dos elementos em uma lista começa em 0
// listas são number[] string[]
// então:

let l1 = [20,30,40,52,47];
console.log(l1);

let l2 = ["joao", "maria", "pedro"]
console.log(l2);

// no squema typescript e usando tipagem fica:

let l3:number[] = [3,4,5];
console.log(l3);

let l4:string[]= ["carla","felipe","arroz"];
console.log(l4);

// para mudar algum elemento dentro da lista e pensando na contagem que parte de 0, ficaria:
// na lista number[]

l3[0] = 25
l3[1] = 80
l3[2] = 152
console.log(l3);

//na lista string[]
l4[0] = "joaquim"
l4[1] = "camila"
l4[2] = "hasney"
console.log(l4);

// não é possivel adicionar na lista tipada inicialmente como number um valor string e vice versa
//EX: 
// l4[0] = 1
// console.log(l4);
// vai dizer: error: TS2322 [ERROR]: Type 'number' is not assignable to type 'string'.

// LENGTH 

// usando length - lenght significa comprimento, então quando dizemos l1.length queremos saber o comprimento 
// da lista e não os elementos que estão dentro dela, no caso de l1,l2,l3 e l4 todos tem 3 elementos
// lembrando que por mais que a contagem dos elementos parta do 0, a lista tem três elementos. 

console.log(l1.length);
console.log(l2.length);
console.log(l3.length);
console.log(l4.length);

// FOR (iteração) usando listas
// seguindo sempre o esquema que é: incialização, condição e incremento
// se eu colocar o console.log(i) vai mostrar QUANTOS são os elementos na lista: 0,1,2,3,4 
// se eu colocar o console.log(l1[i]) |l1 na posição i| vai mostrar QUAIS são os elementos na lista: 20,30,40,52,47
// se eu colocar pra mostrar l1 e l1[i] ele vai mostrar quantos são os valores presentes na lista e onde cada valor 
// se encontra, no caso na posição 0 tem o 20, na posição 1 tem o 30 e etc. 

for( let i = 0 ; i<l1.length; i++){
    console.log(i, l1[i]);

}

/// FOR IN E FOR OFF

// podemos fazer uma mesma relação do for anterior usando o for in
// onde console.lo(i) vai mostrar a contagem dos valores (indices) dentro de l1
// e console.log(l1) vai mostrar o valores em si de l1
// e console.log(i, l1[i]) vai mostrar a posição ou os indices e os valores dentro de cada posição logo a frente
// ps: nao é necessário/possivel no typescript a tipagem usando for in e for off

for(let i in l1){
    console.log(l1[i]);
}

for(let i in l4){
    console.log(i, l4[i]);

}

// FOR OFF para mostrar apenas os valores 
// Vimos que se eu quiser mostrar apenas os valores da lista l4 eu
// posso fazer for( let i in l4){
//              console.log(l4[i]);
// mas posso tambem fazer de outra forma usando o FOR OFF

for ( let mostrevalores of l4){
    console.log(mostrevalores);
}


/// ADICIONAR E REMOVER VALORES NA LISTA - PUSH E SPLICE

let l5:number[] = [20,57,69,4,354,45];

// pensando que temos 6 valores, contando a partir do 0 onde
// 0 = 20, 1 = 57, 2 = 69, 3 = 4 , 4 = 354 , 5 = 45  
//podemos trocar um valor assim:

l5[0] = 25
console.log(l5);

// mas pra adicionar e remover valores usamos : push(empurrar) e splice(emendar,juntar)
// fica então:

l5.push(50,478,47);
console.log(l5);
// o valor adicionado é colocado na ultima posição

// Usamos o splice para remover os valores, mas deve-se dizer entre parenteses(A,B) onde:
//(A:posição de onde parte a remoção de elementos, B:quantos elementos apartir da posição dada quero remover)
// usando para isso a contagem ou posicionamento de indices
// então se  em l5 - > 0 = 25, 1 = 57, 2 = 69, 3 = 4 , 4 = 354 , 5 = 45, 6 = 50, 7 = 478 e 8 = 47 e eu quero remover o 69
// que ta na posição 2, eu devo informar que a partir da posição 2 quero remover 1 elemento, então fica: (2,1)

l5.splice(2,1);
console.log(l5);

// assim o numero 69 na posição 2 sairá da lista
// importante lembrar que a retirada do numero 69
// reorganizou o posicionamento, ficando:
//  0 = 25, 1 = 57, 2 = 4 , 3 = 354 , 4 = 45, 5 = 50, 6 = 478 e 7 = 47
// então se agora eu quiser eliminar os numeros 354, 45 e 50, devo 
// eliminar 3 numero a partir da posição 3, ficando portanto: 3,3

l5.splice(3,3);
console.log(l5);

