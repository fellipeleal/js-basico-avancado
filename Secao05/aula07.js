var numero = 42;
//console.log(numero);

numero = numero + 18;
//console.log(numero);

// Let
let outro_numero = 42
//console.log(outro_numero);

outro_numero = outro_numero + 18;
//console.log(outro_numero);

/* 
Let é a forma mais indicada para evitar erros no código;
Let mantém a vairável em espoco local e Var mantém no escopo global;
a forma mais moderna
*/

//for(var i = 0; i < 5; i++){
    //var valor = i * 3;
    //console.log(valor);
//}

//console.log(valor);
//console.log(i);

//console.log(' ------- com let ------- ')

//for(let i = 0; i < 5; i++){
    //let valor = i * 3;
    //console.log(valor);
//}

//console.log(valor); //reference error, pois a variável é local e só é reconhecido dentro do contexto do for
//console.log(i); //reference error, pois a variável é local e só é reconhecido dentro do contexto do for

let numeros = 13;
//console.log(numeros);

//let numeros = 20; // "SyntaxError: Identifier 'numeros' has already been declared" eu não posso declarar uma variável já existente
//console.log(numeros);


// ----- CONST é uma constância que se manterá em todo o seu programa

const TAXA = 1.44;
//console.log(TAXA);

let resultado = TAXA * 10;
//console.log(resultado);

//TAXA = 5;
//console.log(TAXA); // TypeError: Assignment to constant variable. Não se pode alterar uma constante

// Valor constante VS Mutação
const curso = {nome: "Programação em Javascript"}
//console.log(curso.nome);

//Não posso alterar o valor da constante
//curso = 35; // Error!

//Podemos fazer uma mutação num objeto contido dentro da constante
curso.nome = 'Programação em Python'; //Mutação
console.log(curso);
console.log(curso.nome);


