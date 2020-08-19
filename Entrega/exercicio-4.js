// 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.

let dia = 10
let km = 1800

let valorDiaCarro = 60
let valorPorKmRodado = .15

let valorTotalCarroDia = dia * valorDiaCarro
let valorTotalKmRodado = km * valorPorKmRodado

let valorTotal = valorTotalCarroDia + valorTotalKmRodado

console.log("valor total" + valorTotal)