function calcular_idade(ano_nascimento){ 
    const data = new Date(); //gera a data atual

    const idade = data.getUTCFullYear() - ano_nascimento;

    return idade;
}

let ret = calcular_idade(1988);
console.log(ret + 3); //Podemos recuperar esse dado e trabalhar com ele por conta do return

const data = new Date();

// console.log('Data completa' + data);
// console.log('Ano: ' + data.getUTCFullYear());
// console.log('Ano: ' + data.getMonth()); // 0 para janeiro, 1 para fevereiro...

//Fique esperto!

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4,6))

console.log(somar(4))

console.log(somar(4,6,8))

console.log(somar(4,6,8,3,2,19))


