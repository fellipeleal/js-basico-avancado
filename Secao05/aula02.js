/*
array contendo 5 elementos -> n = 5

// indices -> posição dos elemento no array
[0][1][2][3][4][5]

//Valores em um array
[12]['Geek'][8][true][90]

// Detalhes Sobre arrays:
1. Possuem tamanho ilimitado
2. podemos adicionar qualquer tipo de dado, mas é indicado seguir um padrão

*/

/*

// forma 1

var alunos = new Array('Fellipe', 'Paola', 'Júlia', 'Maria');
//var alunos = ['Fellipe', 'Paola', 'Júlia', 'Maria'];
console.log(alunos)

// Forma 2 [RECOMENDADA]

var nota = [10, 8, 9, 5]
console.log(nota)

//Fazendo acesso ao valor de um índice
console.log(nota[2]);

//Alterando o valor a partir do índice
nota[2] = 35;
console.log(nota)

//Atenção ao acessar um valor com um índice que não existe
nota[9] = 800;
console.log(nota); 
console.log(nota[6]); //undefined

//console.log(nota[6] == undefined); //true
//console.log(nota[2] == undefined); //false

if(nota[6] == undefined){
    nota[6] = 32;
    console.log(nota);
}

//Inserindo elementos no final do array
var nomes = ['Paula', 'Maria', 'Julia'];
console.log(nomes);

nomes.push('Fellipe') //Inserindo no final do array
console.log(nomes)

//Tamanho do array
//console.log(nomes.length); //4 elementos
//var tamanho_array = nomes.length;
//console.log(tamanho_array)

//Ordenar os dados de um array
var alunos = ['Vera', 'Fabio', 'Paola', 'Pedro', 'Julia', 'Gina', 'Wilson']
console.log(alunos);

alunos.sort();
console.log(alunos)

var precos = [123.87, 31.87, 221.76, 23.98];
//console.log(precos);

//precos.sort(); //O sort() transforma tudo para string e depois ordenar a partir do primeiro caractere
//console.log(precos);

var idades = [5, 16, 8, 22, 14, 7, 90, 86, 21];
//console.log(idades.sort()); //O sort() transforma tudo para string e depois ordenar a partir do primeiro caractere

// precos.sort(function(a,b) {return a - b;});
//console.log(precos)

console.log(idades);
delete idades[3];
console.log(idades)

idades.splice(3, 1); //a partir do índice 3, deleta-se 1 elemento. Benefíccio, ele diminui o tamanho do array
console.log(idades);

idades.splice(3, 0, 100, 101);
console.log(idades);

idades.splice(3, 1, 99); // No índice 3, deleta 1 e adiciona
console.log(idades);

for(var i = 0; i < idades.length; i++){
    console.log(idades[i]);
}


// removendo elementos da última posição do array
idades.pop(); // remove e retorna o último elemento do array
console.log(idades);

var ret = idades.pop();
console.log(ret);
console.log(idades);

// removendo o primeiro elemento do array
idades.shift(); // Remove e retornar o primeiro elemento do array  
console.log(idades);

var ret = idades.shift();
console.log(ret);
console.log(idades);

//Inserindo elementos no início do array
idades.unshift(100);
console.log(idades);


//método Slice

var idades = [5, 16, 8, 22, 14, 7, 90, 86, 21];
console.log(idades)

var novo = idades.slice(3);
console.log(novo)

//método Slice

var idades = [5, 16, 8, 22, 14, 7, 90, 86, 21];
console.log(idades)

var novo = idades.slice(1, 2); // vai pegar do índice 1 até o índice 2 sem incluir o índice 2
console.log(novo)

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares);
console.log(rest);

rest.sort(function(a,b){return a - b;});
console.log(rest);



*/

//Matriz 3 x 3

var tabuleiro = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

