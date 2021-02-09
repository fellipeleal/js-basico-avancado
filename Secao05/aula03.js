// Foreach

var cursos = [ 
    'Programação para leigos',
    'Algoritimos',
    'Programação em Java',
    'Programação em C',
    'Programação em Python',
    'Programação em JS',
    'Programação em Banco de Dados',
]

// console.log(cursos);
// console.log(cursos.length);

//Definir uma função
function imprimir(cursos, indice){
    console.log(indice + ' - ' + cursos);
}

cursos.forEach(imprimir);

//Utilização de uma função anônima (lambda/callback) e template de string
cursos.forEach(function(curso, indice){
    //console.log(`${indice} - ${curso}`);

});

for(var i = 0; i < cursos.length; i++){
    console.log(i + " - " + cursos[i]);
}
