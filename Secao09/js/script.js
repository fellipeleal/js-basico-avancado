
//Temos que referenciar:

//1) O input o ato de cadastrar o evento;
let input = document.querySelector('input[name=tarefa]');


//2) O botão que adicionar o elemento na lista;
let btn = document.querySelector('#botao');


//3) A própria lista. 
let lista = document.querySelector('#lista');

// card
let card = document.querySelector('.card');


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas(){

    // Limpar a listagem do itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        // Criar o item da lista
        let itemLista = document.createElement('li');

        // Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //Adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }


        // Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);

    }
}

//Executar a função para renderizar a tela
renderizarTarefas();

// 1) Precisamos 'escutar' o evento de clique no botão

btn.onclick = function(){
    // 2) Precisamos capturar o valor digitado pelo usuário no input
    let novaTarefa = input.value;

    if(novaTarefa !== ""){

    // 3) Precisamos atualizar a nova tarefa na lista(array) de tarefas e renderizar a tela
    tarefas.push(novaTarefa);

    //Executar a função para renderizar a tela
   renderizarTarefas();

   //Limpar o input
   input.value = '';

   //Limpar mensagem de erro (spans)
   removerSpan();

    // Salva os novos dados no banco de dados
    salvarDadosNoStorage();

    }else{

        //Limpar mensagem de erro (spans)
        removerSpan();

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar uma tarefa.');

        span.appendChild(msg);

        card.appendChild(span);

    }
}

function removerSpan(){
    let spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }

}

function deletarTarefa(tar){
    // Remove a tarefa do array(tarefas)
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    //renderiza novamente a tela
    renderizarTarefas();

    // Salva os novos dados no banco de dados
    salvarDadosNoStorage();
}


function salvarDadosNoStorage(){
    // Todo navegador web possui esta capacidade
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}



