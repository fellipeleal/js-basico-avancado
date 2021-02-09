// Destructuring com array - Extrai dados de um container
const numeros = [1, 2, 3, 4];

//console.log(numero[1])

const [num1, num2, num3, num4] = numeros;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

const [n1, ,n3, n4] = numeros;

console.log(n1);
console.log(n3);
console.log(n4);

// Podemos colocar valor default que será usado caso não haja no container

const [nu1, nu2, nu3, nu4 = 34, n5 = 99] = numeros;
// console.log(n1);
// console.log(nu2);
// console.log(n3);
// console.log(n4);
// console.log(n5);

// Destructuring com objeto

const produto = {
    nome: 'PS5',
    preco: 1799.99
}

const {nome, preco} = produto;

console.log(nome);
console.log(preco);

console.log(` O produto ${nome} custa: ${preco}`)
