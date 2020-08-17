//********************** Exercício 6 **********************

/* Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação. Regras:
para ser aprovada a média tem que ser maior ou igual 7
para ser reprovada a média tem que ser menor que 5
para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7 */

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));
let nota5 = Number(prompt("Digite a quinta nota: "));

soma = nota1 + nota2 + nota3 + nota4 + nota5;
media = soma / 5;

function resultadoFinal() {
  if (media < 5) {
    alert("Aluna reprovada com a média de " + media + " pontos 😢");
  } else if (media >= 5 && media < 7) {
    alert("Aluna em recuperação com a média de " + media + " pontos  🙏");
  } else {
    alert("Aluna aprovada com a média de " + media + " pontos 🙋");
  }
}

resultadoFinal();
