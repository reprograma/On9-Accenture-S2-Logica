// 5 - Faça um Programa que peça os três lados de um triângulo. Nenhum valor digitado pode ser 0 (zero) ou negativo. 
//Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

let ladoA = Number(prompt ("Lado A do triangulo: "))
let ladoB = Number(prompt ("Lado B do triangulo: "))
let ladoC = Number(prompt ("Lado C do triangulo: "))

if (ladoA < ladoB + ladoC || ladoB < ladoA + ladoC || ladoC < ladoA + ladoB) {
    console.log("Trata-se de um triangulo");
}

if (ladoA == ladoB && ladoA == ladoC) {
    console.log("Triangulo Equilatero")
} else if(ladoA == ladoB || ladoA == ladoC){
    console.log("Triangulo Isosceles")
    } else
    console.log("Triângulo Escaleno")