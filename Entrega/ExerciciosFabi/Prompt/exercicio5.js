//Enunciado
//5 - Faça um Programa que peça os três lados de um triângulo. 
//Nenhum valor digitado pode ser 0 (zero) ou negativo. 
//Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

//triângulo equilátero= 3 lados na mesma medida
//triangulo isósceles = 2 lados de mesma medida
//triângulo escaleno = todos os seus três lados têm medidas diferentes.

let pergunta1 = prompt("Informe quanto mede a base do triângulo:")
let pergunta2 = prompt("Informe quanto mede o lado esquerdo do triângulo:")
let pergunta3 = prompt("Informe quanto mede o lado direito do triângulo:")

if(Number(pergunta1) === Number(pergunta2) && Number(pergunta1) === Number(pergunta3)){
    console.log("Este é um triângulo equilátero")
} else if (Number(pergunta1) === Number(pergunta2) || Number(pergunta1) === Number(pergunta3)){
    console.log("Este é um triângulo isósceles")
} else if (Number(pergunta1) != Number(pergunta2) && Number(pergunta1) != Number(pergunta3)){
    console.log("Este é um triângulo escaleno")
}