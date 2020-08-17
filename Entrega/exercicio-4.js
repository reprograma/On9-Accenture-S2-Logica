//********************** Exercício 4 **********************

/* Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado. */

let quilometros = Number(prompt("Digite a quantidade de km percorridos: "));
let diasAlugado = Number(
  prompt("Digite a quantidade de dias pelos quais o carro foi alugado: ")
);

let preco = (60 * diasAlugado + 0.15 * quilometros).toFixed(2);

alert("O preço a pagar é R$ " + preco);
