let firstNumber = prompt("digite a primeira medida:")
if (firstNumber <= 0){
let firstNumer = prompt("digite uma medida válida:")
}
let secondNumber = prompt("digite a segunda medida:")
if (secondNumber <= 0){
    let secondNumber = prompt("digite uma medida válida:")
    }
let thirdNumber = prompt("digite a terceira medida:")
if (thirdNumber <= 0){
let thirdNumber = prompt("digite uma medida válida:")
    }
if (firstNumber == secondNumber && secondNumber == thirdNumber && thirdNumber == firstNumber){
    console.log("este é um triângulo equilátero")
}
if( firstNumber == secondNumber && secondNumber !== thirdNumber || secondNumber == thirdNumber &&  thirdNumber !== firstNumber || thirdNumber == firstNumber && firstNumber !== secondNumber ){
    console.log("este é um triângulo isósceles")
}
if(firstNumber !== secondNumber && secondNumber !== thirdNumber && thirdNumber !== firstNumber){
    console.log("este é um triângulo escaleno")
}