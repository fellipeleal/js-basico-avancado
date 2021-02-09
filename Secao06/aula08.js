const cursos = [
    'Programação para leigos',
    'Programação em C',
    'Programação em Python',
    'Programação em Java',
    'Programação Web com Django',
    'Programação em Javascript',

]

// function apresentar(curso, indice){
//     console.log(`${indice + 1} - ${curso}`);
//}

//cursos.forEach(apresentar); //Aqui está ocorrendo o callback

// Usando lambda

// cursos.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}`)
// });

// //Usando arrow function

// cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`))


const precos = [23, 29,876, 65, 450, 320, 140, 56, 50, 11, 09, 9, 97]

//Forma 01

let menores_50 = []

// for(let p in precos){
//     if(precos[p] < 50){
//         menores_50.push(precos[p]);
//     }
// }

//console.log(menores_50)

for(let i = 0; i < precos.length; i++){
    if(precos[i] < 50){
        menores_50.push(precos[i]);
    }
}

console.log(menores_50)

//Forma 02 - Lambda

menores = precos.filter(function(preco){
    return preco < 100;
})

console.log(menores)


//Forma 03 - arrow function
menores_2 = precos.filter(preco => preco < 70);
console.log(menores_2)