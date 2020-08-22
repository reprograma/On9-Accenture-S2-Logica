/* 5 - Faça um Programa que peça os três lados de um triângulo. 
Nenhum valor digitado pode ser 0 (zero) ou negativo. 
Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. */

let lado1 = Number(prompt("Digite o valor do primeiro lado: "));
let lado2 = Number(prompt("Digite o valor do segundo lado: "));
let lado3 = Number(prompt("Digite o valor do terceiro lado: "));
if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    alert("Os valores não podem ser menores ou iguais a zero");
}

if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
    alert("Triângulo Equilatero");
    console.log("Triângulo Equilatero");
} else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
    alert("Triângulo Escaleno");
    console.log("Triângulo Escaleno");
} else {
    alert("Triângulo Isósceles");
    console.log("Triângulo Isósceles");
}