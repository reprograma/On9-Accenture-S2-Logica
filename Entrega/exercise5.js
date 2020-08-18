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



/* if ((sideOne < (sideTwo + sideThree)) && (sideTwo < (sideOne + sideThree)) && (sideThree < (sideOne + sideTwo))) {
    if ((sideOne === sideTwo) && (sideOne === sideThree) && (sideTwo === sideThree)) {
        console.log("Triângulo equilátero");
    } else if (((sideOne = sideTwo) && (sideOne != sideThree)) || ((sideOne = sideThree) && (sideOne != sideTwo)) || ((sideTwo = sideThree) && (sideTwo != sideOne))) {
        console.log("Triângulo isósceles");
    } else if ((sideOne != sideTwo) && (sideOne != sideThree) && (sideTwo != sideThree)) {
        console.log("Triângulo escaleno");
    }
} else {    
    console.log("Não é um triângulo");
} */






/* se (validade = VERDADEIRO) então
se (l1 = l2) e (l1 = l3) e (l2 = l3) então
escreva ("Triângulo equilátero")
fimse
se (l1 <> l2) xou (l1 <> l3) xou (l2 <> l3) então
escreva ("Triângulo isóceles")
fimse
se (l1 <> l2) e (l1 <> l3) e (l2 <> l3) então
escreva ("Triângulo escaleno")
fimse
senao
escreva ("Não é um triângulo")
fimse */