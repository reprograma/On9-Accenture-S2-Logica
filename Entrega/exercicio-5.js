//5 - Faça um Programa que peça os três lados de um triângulo. 
//Nenhum valor digitado pode ser 0 (zero) ou negativo. 
//Indique, caso os lados formem um triângulo, se o mesmo é: 
//equilátero, isósceles ou escaleno.

let ladoUm = prompt("Informe quanto mede a base do triângulo:")
let ladoDois = prompt("Informe quanto mede o lado esquerdo do triângulo:")
let ladoTres = prompt("Informe quanto mede o lado direito do triângulo:")

if ((ladoUm < (ladoDois + ladoTres)) && (ladoDois < (ladoUm + ladoTres)) && (ladoTres < (ladoUm + ladoDois))) {
    if ((ladoUm === ladoDois) && (ladoUm === ladoTres) && (ladoDois === ladoTres)) {
        console.log("Triângulo equilátero")
    } else if ((ladoUm != ladoDois) && (ladoUm != ladoTres) && (ladoDois != ladoTres)) {
        console.log("Triângulo escaleno")
    } else {
        console.log("Triângulo isósceles")
    }
}  
else {
    console.log("Os valores não podem formar um triângulo.")
}
// ok falta fazer commit