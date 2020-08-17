console.log("Informe os 3 lados de um triangulo.")
let ladoA = prompt("Lado A:")
let ladoB = prompt("Lado B:")
let ladoC = prompt("Lado C:")

if(ladoA >= 0 && ladoB >= 0 && ladoC >=0) { 

    if(ladoA == ladoB && ladoB == ladoC) {

        console.log("É um triângulo equilátero")

    }
    else if((ladoA == ladoB) || (ladoB == ladoC) || (ladoC == ladoA)) {
        
        console.log("é um triângulo isóceles")

    }
    else if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        
        console.log("É um triângulo escaleno")

    }

}

else {
    console.log("Número inválido. Tente novamente")
}