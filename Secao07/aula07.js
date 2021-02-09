
const curso = {
    nome: 'Programação em Javascript',
    horas: 25,
    preco: 29.99
}

// console.log(curso);
// console.log(typeof(curso));

// console.log(Object.keys(curso));
// console.log(Object.values(curso));

// console.log(Object.entries(curso));

// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]} : ${par[1]}`)
// });

// Object.entries(curso).forEach(([chave, valor]) =>{
//     console.log(`${chave} : ${valor}`)
// })

// curso.nome = 'Programação em Python';

// console.log(curso)

// Object.defineProperty(curso, 'Publicacao', {
//     enumerable: true,
//     writable: false,
//     value: '28/01/2021'

// })

// curso.publicacao = '29/01/2021'

// console.log(curso);

// console.log(curso.publicacao);

// // const outro = {}

// // Object.defineProperty(outro, '', {

// // });

Object.freeze(curso);

curso.nome = 'Programação em Python';

console.log(curso);

const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek University'},
    {nome: 'Fellipe Leal', empresa: 'Google'},
    {nome: 'Mariana Teixeira', empresa: 'Apple'}
]

console.log(usuarios[0]);

console.table(usuarios);

console.table(curso);