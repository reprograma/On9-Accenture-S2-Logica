/* 6 - Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.
Regras:

para ser **aprovada** a média tem que ser maior ou igual 7

para ser **reprovada** a média tem que ser menor que 5

para ir para **recuperação** a média tem que ser maior ou igual a 5 e menor que 7 */

let grade1 = parseFloat(prompt("Qual a 1ª nota?"));
let grade2 = parseFloat(prompt("Qual a 2ª nota?"));
let grade3 = parseFloat(prompt("Qual a 3ª nota?"));
let grade4 = parseFloat(prompt("Qual a 4ª nota?"));
let grade5 = parseFloat(prompt("Qual a 5ª nota?"));

let average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

if (average >= 7) {
    console.log("Parabéns, você está aprovada por média!");
} else if (average >= 5 && average < 7) {
    console.log("Você ficou em recuperação. Será preciso estudar mais um pouco.");
} else {
    console.log("Que pena, você foi reprovada.");
}