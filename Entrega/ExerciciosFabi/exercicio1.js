//Enunciado:
//1 - Converta uma temperatura digitada em Celsius para Fahrenheit. 
// Dica: a formula do Fahrenheit = 9*Celsius/5 + 32

//Opção 1
let valor = prompt("Qual a temperatura está no momento em graus Celsius?")
let conta = ((9*Number(valor))/5) + 32 
console.log("A temperatura em Fahrenheit é "+conta)

//Opção 2
let conta = Number(prompt("Qual a temperatura está no momento em graus Celsius?"))*9/5+32
console.log("A temperatura em Fahrenheit é "+conta)