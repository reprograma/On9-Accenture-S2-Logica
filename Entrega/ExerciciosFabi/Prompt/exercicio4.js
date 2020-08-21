//Enunciado
//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado 
//pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.

let kiloMetros = prompt("Quantos km foram percorridos pelo carro alugado?")
let dias  = prompt("Por quantos dias o carro foi alugado?")

let conta = (Number(dias)*60)+(Number(kiloMetros)*0.15)

console.log("Você pagará ao total R$"+conta.toFixed(2)+" reais.")