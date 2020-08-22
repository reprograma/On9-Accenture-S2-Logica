/** Exercício 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
 * assim como a quantidade de dias pelos quais o carro foi alugado. 
 * Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.
 * 
 */

 let quantKm = Number(prompt("Digite a quantidade de km percorridos: "))
 let quantidadeDias = Number(prompt("Digite a quantidade de dias pelos quais o carro foi alugado: "))
 let valorDiaria = 60
 let valorKmRodado = 0.15
 let valorAPagar = Number(valorDiaria * quantidadeDias) + Number(valorKmRodado * quantKm)
 console.log("O valor a ser pago considerando a quantidade de dias de locação e km rodado é R$ " + valorAPagar )