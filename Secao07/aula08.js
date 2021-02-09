/*
funcionarios
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

funções
    descrição
    salário
*/

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }
}

class Pessoas{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get email(){
        return this._nome;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    // Método Extra
    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo){
        // transforma a string em um array onde cada elemento do array será as partes da string separadas por espaço
        nome_completo = nome_completo.split(' ');

        // Remove e retorna o elemento da posição 0 do array
        this._nome = nome_completo.shift();

        // junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = nome_completo.join(' ');
    }

    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }

}

class Funcionario extends Pessoas{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }
}

class Cliente extends Pessoas{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda = renda;
    }
}

const cliente_01 = new Cliente('Fellipe', 'Leal', 'fellipe.f.leal@gmail.com', '111.222.333-45', 10000.99);
const cliente_02 = new Cliente('Paola', 'Castro', 'paola@gmail.com', '222.333.555-45', 15000.00);

console.table(cliente_01);
console.log(cliente_01);
console.log(cliente_01.nome_completo);

cliente_02.nome = 'Paola Correa' 

//console.log(cliente_02);
cliente_02.imprimir_dados();

const programador = new Funcao('Programador', 5200.00);
const suporte = new Funcao('Suporte', 2800.00);

console.log(programador);
console.log(suporte);

const f1 = new Funcionario('Julia', 'Leal', 'julial@gmail', '111.222.345-78', programador, 'F10');
const f2 = new Funcionario('Gina', 'Leal', 'gina@gmail.com', '222.333.345-65', suporte, 'F11'); 

console.log(f2.funcao.salario);

