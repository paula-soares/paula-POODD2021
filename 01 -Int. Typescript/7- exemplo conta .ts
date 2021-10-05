
// imagine que iremos criar uma algoritmo de conta de banco
// declaro uma variavel do tipo number,  que começa igual a 0

let saldo:number = 0

// acrescentar o diminuir um valor seria 

saldo += 10
console.log(saldo);

saldo -= 5
console.log(saldo);

/// pensando dentro da lógica de criar um objeto, teriamos então:

let conta = {
    "nome":"paula",
    "idade":"27",
    "saldo":0,
}

// adicionar ou retirar um valor em saldo seria:

conta.saldo += 200;
console.log(conta.saldo);

conta.saldo -= 50
console.log(conta.saldo);

/// essa relação pode melhorar bastante se usarmos funções 
/// onde a função deposito é composta por conta e valor (conta,valor)

function depos(conta:any,valor:number):void{
    conta.saldo += valor;
}

function saca(conta:any,valor:number):boolean{
    conta.saldo -= valor; 
    return true
}

// e onde para adicionar um valor seria: 

depos(conta,20);
console.log(conta.saldo)

saca(conta,10);
console.log(conta.saldo)

// o problema pode ser quando o valor a ser sacado é superior ao valor da conta
// ai é preciso adicionar na função outras possibilidades, vejamos:

let contac = {
    "nome":"paula",
    "idade":"27",
    "saldo":0,
}

// criamos uma função chamada depositar composta por (contac,valor), onde 
// contac recebe em saldo o valor definido para o deposito;

// criamos também a função sacar, composta por (contac,valor), onde
// quando o valor dado, for menor ou igual ao saldo o saque sera realizado
// e se valor for maior que o saldo, o saque não será autorizado, para que a conta não fique negativa. 

// não usamos return ( não entendi muito porque)

function depositar(contac:any,valor:number):void{
    contac.saldo += valor;
    console.log("deposito realizado");
}

// nessa segunda função colocamos o resultado da função como tipo lógico retornando falso ou verdadeiro
// além do if e do else. 
function sacar(contac:any,valor:number):boolean{
    
    if (valor <= contac.saldo){
        contac.saldo -= valor;
        console.log("saque autorizado");
        return true
    }else{
        console.log("saque não autorizado");
        return false

    }
    
}

/// para realizar o deposito usando as funções no objeto contac inicialmente definido teremos: 

depositar(contac,5887);
console.log(contac.saldo);

/// para realizar saque usando as funções no objeto contac inicialmente definido teremos: 
sacar(contac,200);
console.log(contac.saldo);

/// e aqui um caso em que o valor excede ao que existe na conta. 

sacar(contac,5000000);
console.log(contac);


/// definidas as funções podemos continuar aplicando-as em outros objetos, que possuem os mesmo atributos
///EX:

let contac1 =  {
    "nome":"trojane",
    "idade":"27",
    "saldo": 0,
}

depositar(contac1,500);
console.log(contac1);

sacar(contac1,300);
console.log(contac1.saldo);

sacar(contac1,800);
console.log(contac1.saldo);