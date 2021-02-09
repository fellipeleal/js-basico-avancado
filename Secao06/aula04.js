function somar(){
    let soma = 0;
    for(i = 0; i < arguments.length; i ++){
        soma += arguments[i];
    }
    return soma;
}

// console.log(somar());
// console.log(somar(2));
// console.log(somar(2, 3));
// console.log(somar(2, 3, 4, 6));
// console.log(somar(2, 3, 5, 7, 9));

function imprime_valores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

// imprime_valores();
// imprime_valores(4, 6);
// imprime_valores(4, 6, 8);
// imprime_valores(4, 6, 8, 12, 48);

//Gambiarra 01

function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

// console.log(somar2(4, 5, 6,)); //15
// console.log(somar2()); //6
// console.log(somar2(2)); //7
// console.log(somar2(2, 2)); //7
// console.log(somar2(3, 4)); //10
// console.log(somar2(2, 3, 4, 5, 6)); //9

// //Problema
// console.log(somar2(0, 0, 0)); // 6, pois "0" em JS é falso e é por isso que ele soma 6

//Gambiarra 02

function somar3(num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 1 : num2;
    num3 = isNaN(num3) ? 1 : num3;

    return num1 + num2 + num3;
}

// console.log(somar3(4, 5, 6,)); //15
// console.log(somar3()); //6
// console.log(somar3(2)); //7
// console.log(somar3(2, 2)); //7
// console.log(somar3(3, 4)); //10
// console.log(somar3(2, 3, 4, 5, 6)); //9

//Problema - Gambiarra 02
//console.log(somar3(0, 0, 0)); // 6, pois "0" em JS é falso e é por isso que ele soma 6

//Forma atual e recomendada
function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3
}

// console.log(somar4(4, 5, 6,)); //15
// console.log(somar4()); //6
// console.log(somar4(2)); //7
// console.log(somar4(2, 2)); //7
// console.log(somar4(3, 4)); //10
// console.log(somar4(2, 3, 4, 5, 6)); //9

// console.log(somar4('a', 'b', 'c')); //'abc'
// console.log(somar4(true, false, 'c')); //'1c' true = 1 e false = 0
// console.log(somar4(2, true, false)); //'3'


function somar5(num1 = 1, num2 = 2, num3 =3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possível efetuar a soma.';
    }
}

console.log(somar5(4, 5, 6,)); //15
console.log(somar5()); //6
console.log(somar5(2)); //7
console.log(somar5(2, 2)); //7
console.log(somar5(3, 4)); //10
console.log(somar5(2, 3, 4, 5, 6)); //9

console.log(somar5('a', 'b', 'c')); //'abc'
console.log(somar5(true, false, 'c')); //'1c' true = 1 e false = 0
console.log(somar5(2, true, false)); //'3'