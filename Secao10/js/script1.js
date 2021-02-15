// Ajax (XMLHttpRequest) - Asynchronous Javascript and XML

let btn =  document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function(){

    // Limpar o conteúdo da div
    div.innerHTML = '';

    // Instanciando a variável e neste caso é o objeto ajax
    let ajax = new XMLHttpRequest();

    console.log(input.value);

    // console.log(ajax.readyState); // 0
    // Abrir uma conexão (1: método e 2:endereço)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    // console.log(ajax.readyState); // 1
    // Enviar a requisição
    ajax.send(null);

    ajax.onreadystatechange = function(){

        // Criar elemento span
        let spanNone = document.createElement('span');

        //Criar a variável nome
        let txtNome = '';

        /*
        ajax.readyState -> 0 => Antes da conexão ser aberta
        ajax.readyState -> 1 => Após abertura de conexão
        ajax.readyState -> 2 => headers (cabeçalho) foram recebidos
        ajax.readyState -> 3 => Carregando o corpo da requisição (conteúdo/dados)
        ajax.readyState -> 4 => O conteúdo (dado) está pronto para uso


        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                // Transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                // Se usuário possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else{
                    txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                }
                //Adicionar o texto ao span e o span na div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }

    }



}

