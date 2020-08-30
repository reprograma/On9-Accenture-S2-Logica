//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade
//de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.

let kmPercorridos = Number(prompt ("Quantos km percorridos: "))
let quantidadeDiasAluguel = Number(prompt ("Quantos dias de aluguel "))

const valorKmRodado = 0.15
const valorDiariaCarro = 60

precoTotalkmPercorridos = kmPercorridos * valorKmRodado
precoTotalDiarias = valorDiariaCarro * quantidadeDiasAluguel

valorAPagar = precoTotalDiarias + precoTotalDiarias
