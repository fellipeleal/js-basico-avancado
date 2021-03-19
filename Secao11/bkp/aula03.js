/*
. Conjuntos não aceitam repetição de valores;
. conjuntos não são indexados;

*/

// Declarando um conjunto
let cursos = new Set();

// Adicionando Valores
cursos.add('Programação para leigos');
cursos.add('Algoritmos e lógica de programação');

// Adicionar valores concatenados
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de dados');
cursos.add('Programação Web com Django');

// //console.log(cursos)
// //console.log(cursos.size)

// console.log(cursos.has('Banco de dados'));

// Deletar elementos do conjunto
// cursos.delete('Banco de dados');
// console.log(cursos);

// let ret = cursos.delete('Banco de dados');
// console.log(ret)

let frutas = ['manga', 'banana', 'uva', 'jaca', 'banana', 'uva'];

let frutas_unicas = new Set(frutas);
console.log(frutas_unicas)
