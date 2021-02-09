// let itexto = document.getElementById('produto');

// console.log(itexto);

// let spans = document.getElementsByTagName('span');
// // console.log(spans);

// let eles = document.getElementsByClassName('texto');
// console.log(eles)

// Ler Valores
// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

// // Alterar Valores

// spans[0].textContent = 'JavaScript';
// // spans[1].textContent = 'Programação';

// let span = document.getElementsByTagName('span')[0];
// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';

// let inp = document.querySelector('body div.container input'); 

// let inp = document.querySelectorAll('input'); // //busca todos os elementos pela tag

// let eles = document.querySelectorAll('.texto') //busca todos os elementos pela classe por conta do 'ponto'

// let div1 = document.querySelector('#div1'); //busca elemento pelo id

// let imp = document.querySelector('input[name=produto]');
//let imp = document.querySelector('input[name=preco]');
//console.log(imp);

// Exemplo 01

// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado');
// }

// Exemplo 02
let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Você comprou o produto ${inp.value} com sucesso`);
}


