// 

let lado1 = parseInt(prompt("Digite o 1º lado do triângulo:"));
let lado2 = parseInt(prompt("Digite o 2º lado do triângulo:"));
let lado3 = parseInt(prompt("Digite o 3º lado do triângulo:"));
if ((lado1 < (lado2 + lado3)) && (lado2 < (lado1 + lado3)) && (lado3 < (lado1 + lado2))) {
    console.log("Os valores podem formar um triângulo.");
}  
else {
    console.log("Os valores não podem formar um triângulo.");
}