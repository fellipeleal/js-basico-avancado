/*
JSON - JavaScript Object Notation
*/

const curso = {
    nome: 'Programação em Javascript',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
    
}

// console.log(curso);
// // console.log(curso.preco());
// console.log(typeof(curso));

// // convertando objeto JS para JSON

// const json = JSON.stringify(curso);
// console.log(json); //Não tem a função, enquanto que no objeto existem coisas mais complexas como funções. 
// console.log(typeof(json)) 
// // json.horas = "30";
// // console.log(json.horas);
// console.log(json)
// console.log(curso.preco());


// // Convertendo de JSON para Objeto JavaScript
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof(obj));

//const json_errado = "{'nome': 'Programação em JavaScript', 'preco': 27.99}";

const json_corrigido = '{"nome": "Programação em JavaScript", "preco": 27.99}';

console.log(json_corrigido);
console.log(typeof(json_corrigido));

const novo_obj = JSON.parse(json_corrigido);
console.log(novo_obj);
console.log(typeof(novo_obj));
