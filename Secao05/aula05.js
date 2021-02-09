// Filter

var numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar_pares(numero){
    return numero % 2 === 0;
}

function filtrar_impares(numero){
    return numero % 2 !== 0;
}

function multiplos_5(numero){
    return numero % 5 === 0;
}

var ret = numeros.filter(filtrar_pares);
console.log(ret);

ret = numeros.filter(filtrar_impares);
console.log(ret);

ret = numeros.filter(multiplos_5);
console.log(ret);

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 9.0},
    {nome: 'Fellipe', nota: 7.5},
    {nome: 'Mariana', nota: 10.0},
    {nome: 'João', nota: 4.5},
    {nome: 'Antonio', nota: 3.0},
]

function filtrar_notas_maior_8(aluno){
    return aluno.nota > 8;
}

var filtro = alunos.filter(filtrar_notas_maior_8);
console.log(filtro);