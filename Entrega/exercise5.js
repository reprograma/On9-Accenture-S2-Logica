/* 5 - Faça um Programa que peça os três lados de um triângulo. Nenhum valor digitado pode ser 0 (zero) ou negativo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. */

let sideOne = parseInt(prompt("Digite o 1º lado do triângulo:"));
let sideTwo = parseInt(prompt("Digite o 2º lado do triângulo:"));
let sideThree = parseInt(prompt("Digite o 3º lado do triângulo:"));

while (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0) {
    alert("Valores errados! Os valores não podem ser 0 (zero) ou negativos. Digite novamente.");
    sideOne = parseInt(prompt("Digite o 1º lado do triângulo:"));
    sideTwo = parseInt(prompt("Digite o 2º lado do triângulo:"));
    sideThree = parseInt(prompt("Digite o 3º lado do triângulo:"));
}

if ((sideOne < (sideTwo + sideThree)) && (sideTwo < (sideOne + sideThree)) && (sideThree < (sideOne + sideTwo))) {
    if ((sideOne === sideTwo) && (sideOne === sideThree) && (sideTwo === sideThree)) {
        console.log("Triângulo equilátero");
    } else if ((sideOne != sideTwo) && (sideOne != sideThree) && (sideTwo != sideThree)) {
        console.log("Triângulo escaleno");
    } else {
        console.log("Triângulo isósceles");
    }
}  
else {
    console.log("Os valores não podem formar um triângulo.");
}