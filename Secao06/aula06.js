//forma 01

function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4,4));

//forma 02
let somar2 = function(num1, num2){
    return num1 + num2;

}

console.log(somar2(4,4));

// Forma 03
let somar3 = somar1;
console.log(somar3(4,4));

//Arrow function
let somar4 = (num1, num2) => {
    return num1 + num2;
}
console.log(somar4(4, 6));
/*
ATENÇÃO:
Caso a sua função tenha apenas um parâmetro de entrada, e execute apenas uma linha, 
você pode simplificar ainda mais usando Arrow function
 */

let dobrar = valor => valor *2;

console.log(dobrar(5));