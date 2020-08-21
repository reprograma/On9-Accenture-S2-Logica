// não consegui desenvolver o raciocinio, não couber fazer o metodo de comparação com 3 variaies
isósceles =  dois lado iguais
equilatero = 3 lados iguais
escaleno = todos diferentes

let medida1 = Number(prompt("Digite o valor no lado 1:"))
let medida2 = Number(prompt("Digite o valor no lado 2:"))
let menida3 = Number(prompt("Digite o valor no lado 3:"))

if (medida1 = medida2) {
    console.log("Esse triangulo é isósceles, pois possui os 2 lados iguais e um diferente")
}

if (medida1 = medida3) {
    console.log("Esse triangulo é isósceles, pois possui os 2 lados iguais e um diferente")
}

if (medida3 = medida2) {
    console.log("Esse triangulo é isósceles, pois possui os 2 lados iguais e um diferente")
}

if ((medida1 != medida2) != medida3 ) {
    console.log("Esse triangulo é escaleno, pois possui os 3 diferente")
}
