// // let nome = 'Fellipe Leal'

// // for(let letras of nome){
// //     console.log(letras);
// // }

// let numeros = [1, 2, 3, 4, 5,];

// for(let numero of numeros){
//     console.log(numero * 2)
// }

// for(let indice in numeros){
//     console.log(`Indice: ${indice}, Valor ${numeros[indice]}`);
// }

let cursos = new Map([
    [1, 'Programação em Python'],
    [2, 'Programação em Java'],
    [3, 'Programação em C'],
    [4, 'Programação em Javascript'],
    [5, 'Programação em SQL'],
    [6, 'Programação em Djano']

]);

// for(let curso of cursos){
//     console.log(`Indice: ${curso[0]} - Nome: ${curso[1]} `)
// }

// Somente as chaves

// for(let chaves of cursos.keys()){
//     console.log(chaves)
// }

// for(let valor of cursos.values()){
//     console.log(valor)
// }

// Chave e valor

for(let [chave, valor] of cursos.entries()){
    console.log(`Chave: ${chave} -- Valor: ${valor}`)
}

let conjunto = new Set([1,2,3,4,5,6,6,3]);

for(let numero of conjunto){
    console.log(numero);
}
