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
    // Sobrescrita de método
    imprimir_dados(){
        super.imprimir_dados();
        console.log(`Registro: ${this.registro} -- Salário: R$ ${this.funcao.salario}`)
    }
    // imprimir_dados(){
    //     super.imprimir_dados();
    //     console.log(`${this.nome_completo} vencimento no valor de: R$ ${this.funcao.salario}`)
    // }
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


const prog = new Funcao('Programador', 5900.00);
const f1 = new Funcionario('Paula', 'Fernandes', 'paula@gmail.com', '111.555.234-90', prog, 'F653');

f1.imprimir_dados(); // Pessoa
//f1.imprimir();

const c1 = new Cliente('Pedro', 'Lay', 'lay@gmail.com', '112.331.234.90', 7000.00 );

c1.imprimir_dados(); //Pessoa

/*
Sobrescrita de método 

Polimorfismo - Dois objeto com comportamento diferentes, como é o caso de Pessoa
 */

