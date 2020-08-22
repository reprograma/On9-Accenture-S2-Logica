let a
let b
let c

do{
    a = parseFloat(prompt("Digite o valor do 1º lado (maior que zero)"))
}while(a<=0)

do{
    b = parseFloat(prompt("Digite o valor do 2º lado (maior que zero)"))
}while(b<=0)

do{
    c = parseFloat(prompt("Digite o valor do 3º lado (maior que zero)"))
}while(c<=0)

if(a === b & b === c){
    console.log("Triângulo equilátero")
}else if(a === b | b === c | a === c){
    console.log("Triângulo isósceles")
}else{
    console.log("Triângulo escaleno")
}