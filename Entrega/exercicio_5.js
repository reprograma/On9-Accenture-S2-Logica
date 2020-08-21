//5 - Faça um Programa que peça os três lados de um triângulo. Nenhum valor digitado pode ser 0 (zero) 
//ou negativo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

let A = Number(prompt("Digite o valor do lado 1:"))
let B = Number(prompt("Digite o valor do lado 2:"))
let C = Number(prompt("Digite o valor do lado 3:"))

if (A > 0 && B > 0 && C >0) {

if (A===B && B===C){
    console.log("O Triangulo é equilátero")
} else if (A==B && B != C || A==C&&C!=B || B==C&&A!=C){
    console.log("O triângulo é isoceles")
}else 
    console.log ("O triangulo é escaleno")
}