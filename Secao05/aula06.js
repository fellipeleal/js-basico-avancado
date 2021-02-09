/*

var precos = [4.88, 5.90, 8.75, 9.0, 5.15];

var soma = 0

for(var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
}

var precos = [4.88, 5.90, 8.75, 9.0, 5.15];

soma = 0;

precos.forEach(function(valor){
    soma = soma + valor;
});

// console.log(soma);

function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce(somar)
console.log(ret);

*/

// Exemplo Map e Reduce

var precos = [4.88, 5.90, 8.75, 9.0, 5.15];

function somar(anterior, atual){
    return anterior + atual;
}

function adicionar_taxa(valor){
    return valor * 1.10;
}

var ret = precos.map(adicionar_taxa).reduce(somar);
console.log(ret);

function preco_maior_4(valor){
    return valor > 4;
}

var ret2 = precos.filter(preco_maior_4).map(adicionar_taxa).reduce(somar);
console.log(ret2);