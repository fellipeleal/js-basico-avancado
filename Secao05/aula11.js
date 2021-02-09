//tratamos erros com Try/Cat

// try{
//     console.log(nome);
// }catch(e){
//     console.log('Não foi possível imprimir nome.');
//     console.log(e.nome);
//     console.log(e.message);
// }

//Lançando erros

function dividir(num1, num2){
    if(num1 === 0 || num2 === 0 ){
        throw('Os valores devem ser positivos.'); //lançando uma execeção (erro)
    }else{
        return num1 / num2
    }
}
try{
    let ret = dividir(8,2);
    console.log(ret);
}catch(e){
    console.log('Não foi possível dividir.');
}finally{ //é sempre executado
    console.log('Vamos continuar...')
}

