//Tema: Cidadão de primeira classe

function somar(num1, num2){
    return num1 + num2;
}

let res = somar(4,2);
// console.log(res);
// console.log(somar(10,5));

const executar = somar;

console.log(executar(10,5));

// Exemplo 2

function subtrair(num1, num2){
    return num1 - num2;
}

function faz_algo(num1, num2, funcao){
    return funcao(num1, num2);
}

console.log(faz_algo(10, 5, somar));
console.log(faz_algo(10, 5, subtrair));


// Exemplo 03

function outro(z){
    return z;
}

const ret = outro(subtrair);
console.log(ret(10,8));

let valores = [1, 3.4, true, somar]

for(let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]) + ' : ' + valores[i]);
}

