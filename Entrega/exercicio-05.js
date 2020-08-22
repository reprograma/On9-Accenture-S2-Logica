/**Faça um Programa que peça os três lados de um triângulo. 
 * Nenhum valor digitado pode ser 0 (zero) ou negativo. Indique, 
 * caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. */
window.alert("Medida diferente de ZERO");

var ladoUm = Number(prompt("Medida de lado 1: "));
var ladoDois = Number(prompt("Medida de lado 2: "));
var ladoTres = Number(prompt("Medida de lado 3: "));

if (ladoUm > (ladoDois + ladoTres) || ladoDois > (ladoUm + ladoTres) || ladoTres > (ladoUm + ladoDois)) {
    console.log("Não é um triângulo!")
} else if (ladoUm == ladoDois && ladoDois == ladoTres){
    console.log("É um Equilátero")
} else if (ladoUm == ladoDois || ladoDois == ladoTres || ladoUm == ladoTres){
    console.log("É um Isósceles")
} else {
    console.log("É um Escaleno")
}
