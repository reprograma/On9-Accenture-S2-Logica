let side_1 = Number(prompt("Insira o primeiro lado em cm"))

let side_2 = Number(prompt("Insira o segundo lado em cm"))

let side_3 = Number(prompt("Insira o terceiro em cm"))

if(side_1 <= 0 && side_2 <= 0 && side_3 <= 0){
    console.log("Números inválidos. Insira valores maiores que 0 e positivos para o cálculo")

}else if(side_1 === side_2 && side_1 === side_3){
    console.log("Seu triângulo é equilátero")

}else if(side_1 === side_2 || side_1 === 3){
    console.log("Seu triângulo é isósceles")

}else if(side_1 != side_2 && side_1 != side_3){
    console.log("Seu triângulo é escaleno")
}


