function mostrarAlerta(){
    alert('Clicaram no botão!');
}

function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando'
}

function mudarCor(){
    // #000000 (black), #FFFFFF (branco)
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1);

    Document.bgColor = cores[numero];
}

function escreverTexto(input){
    let span = document.getElementById('texto');

    span.innerHTML = input.value;
}
