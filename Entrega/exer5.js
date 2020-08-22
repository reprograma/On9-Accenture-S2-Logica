//5 - Faça um Programa que peça os três lados de um triângulo. Nenhum valor
//digitado pode ser 0 (zero) ou negativo. Indique, caso os lados formem um
//triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

let lado1 = prompt("Digite o primeiro lado do triângulo:")
let lado2 = prompt("Digite o segundo lado do triângulo:")
let lado3 = prompt("Digite o terceiro lado do triângulo:")



if (lado1 == lado2 && lado2 == lado3){ 

    console.log("Triângulo equilatero")
}

else if ((lado1 == lado2 && lado2 != lado3)||(lado1 != lado2 && lado2 == lado3)||(lado1 == lado3 && lado2 != lado3)){

    console.log("Triângulo isosceles")
}

else { console.log("Triângulo escaleno")

}