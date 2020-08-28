//Enunciado
//5 - Faça um Programa que peça os três lados de um triângulo. 
//Nenhum valor digitado pode ser 0 (zero) ou negativo. 
//Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

//triângulo equilátero= 3 lados na mesma medida
//triangulo isósceles = 2 lados de mesma medida
//triângulo escaleno = todos os seus três lados têm medidas diferentes.

var lado1 = 10
var lado2 = 12
var lado3 = 13

if(lado1 === lado2 && lado1 === lado3){
    console.log("Este é um triângulo equilátero")
} else if (lado1 === lado2 || lado1 === lado3){
    console.log("Este é um triângulo isósceles")
} else if (lado1 !== lado2 && lado1 !== lado3){
    console.log("Este é um triângulo escaleno")
}