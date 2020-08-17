//********************** Exercício 5 **********************

/* Faça um Programa que peça os três lados de um triângulo. Nenhum valor digitado pode ser 0 (zero) ou negativo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. */

let primeiroLado = Number(prompt("Digite o tamanho do 1º lado do triângulo: "));
let segundoLado = Number(prompt("Digite o tamanho do 2º lado do triângulo: "));
let terceiroLado = Number(prompt("Digite o tamanho do 3º lado do triângulo: "));

function classificarTriangulo() {
  if (primeiroLado == segundoLado && segundoLado == terceiroLado) {
    alert("Triângulo EQUILÁTERO!");
  } else if (
    primeiroLado != segundoLado &&
    primeiroLado != terceiroLado &&
    segundoLado != terceiroLado
  ) {
    alert("Triângulo ESCALENO!");
  } else {
    alert("Triângulo ISÓSCELES!");
  }
}

classificarTriangulo();
