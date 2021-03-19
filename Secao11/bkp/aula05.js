// Object Short Sintax

let nome = 'Programação em Javascrupt';
let preco = 'R$ 29.99';
let horas = 25;

const curso = {
    nome: nome,
    preco: preco,
    instrutor: 'Fellipe Leal'
};

console.log(curso);

//  Se o atributo tiver o mesmo nome da variável, é possível remover

const curso_2 = {
    nome,
    preco,
    instrutor: 'Fellipe Leal',
    carga_horario: horas
};

console.log(curso_2);