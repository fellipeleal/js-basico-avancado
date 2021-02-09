class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    }

}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo;
    }

}

// Instaciando um Objeto - forma 01

// const curso = new Object();
// curso.nome = 'Programação em Javascript';
// curso.preco = 27.99;

// console.log(curso);

// curso['qtd_alunos'] = 50;

// console.log(curso)

// delete curso['qtd_alunos'];

// console.log(curso);

// Instanciação de Objetos - Forma 2 - Objeto Literal
const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        },
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'}
        ]
    }
}

//console.log(programa);

// console.log(programa.nome);
// console.log(programa.fabricante.nome);
// console.log(programa.fabricante.filiais[0]);

// programa.nome = 'PlayStation OS';

// console.log(programa.nome);

// console.log(programa);

// delete programa.fabricante.filiais;

// console.log(programa.fabricante.filiais); // undefined

// console.log(programa.fabricante.filiais.length); // ReferenceError

// Instanciando Objetos - Forma 3 - Objeto Literal

// const pessoa = {};

// //console.log(typeof(pessoa));

// pessoa.nome = 'Angelina';

// console.log(pessoa);

// Instanciando Objetos - Forma 04 - Função Construtora

// function Lampada(cor){
//     this.cor = cor;
// }

// const l1 = new Lampada('Branca');

// console.log(l1);
// console.log(typeof(l1));

// Instanciando Objetos - Forma 05 - Objeto a partir das nossas classes
 

const fit = new Carro('Fit');
fit.imprimir();