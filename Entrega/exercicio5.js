let lado1 = Number(prompt("Digite o primeiro lado (Diferente de 0 e maior ou igual a 1):"));
let lado2 = Number(prompt("Digite o segundo lado (Diferente de 0 e maior ou igual a 1):"));
let lado3 = Number(prompt("Digite o terceiro lado (Diferente de 0 e maior ou igual a 1):"));
let triangulo = ((lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2));

if ((lado1 <= 0) || (lado2 <= 0) || (lado3 <= 0)) {
    alert("Você digitou zero ou um número negativo. Por favor, tente novamente.");
} else if (triangulo == false) {
    alert("Esses lados não formam um triângulo! Tente novamente.");
} else if ((lado1 == lado2) && (lado2 == lado3)) {
    alert("Esses lados podem formar um triângulo equilátero.");
} else if ((lado1 != lado2) && (lado2 != lado3) && (lado3 != lado1)) {
    alert("Esses lados podem formar um triângulo escaleno.");
} else {
    alert("Esses lados podem formar um triângulo isósceles.");
};