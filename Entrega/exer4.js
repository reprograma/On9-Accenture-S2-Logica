//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro
//alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi
//alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$
//0,15 por km rodado.


let dias = prompt("Quantos dias?")
let km = prompt("Qauntos Km")
let precoDia = dias *60
let precoKm = km *0.15
let precoTotal = precoDia + precoKm

console.log("Preço total:R$ " + precoTotal)