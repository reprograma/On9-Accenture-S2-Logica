/* 6 - Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluna foi aprovada, 
reprovada ou ficou em recuperação.
Regras:
para ser **aprovada** a média tem que ser maior ou igual 7

para ser **reprovada** a média tem que ser menor que 5

para ir para **recuperação** a média tem que ser maior ou igual a 5 e menor que 7 */

let nota1 = Number(prompt("Digite a nota 1: "));
let nota2 = Number(prompt("Digite a nota 2: "));
let nota3 = Number(prompt("Digite a nota 3: "));
let nota4 = Number(prompt("Digite a nota 4: "));
let nota5 = Number(prompt("Digite a nota 5: "));

let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

if (media >= 7) {
    alert("Aprovada! média: " + media);
    console.log("Aprovada! média: " + media);
} else if (media >= 5 && media <= 7) {
    alert("Recuperação! média: " + media);
    console.log("Recuperação! média: " + media);
} else {
    alert("Reprovada! média: " + media);
    console.log("Reprovada! média: " + media);
}