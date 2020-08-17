let ladoA = Number(prompt("Digite lado A do triangulo. (Apenas numeros > 0)"));
let ladoB = Number(prompt("Digite lado B do triangulo. (Apenas numeros > 0)"));
let ladoC = Number(prompt("Digite lado C do triangulo. (Apenas numeros > 0)"));

if(Math.abs(ladoA - ladoB) > ladoC > (ladoA + ladoB)) { 
console.log("NÃO É UM TRIANGULO")
} else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
    console.log("É UM TRIANGULO ISOSCELES")
} else if(ladoA == ladoB == ladoC){
    console.log("É UM TRIANGULO RETANGULO")
} else {
    console.log("É UM TRIANGULO ESCALENO")
}