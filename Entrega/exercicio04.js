/* 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado. */
let quantidadeKm = Number(prompt("Quantos km foram percorridos? "));
let quantidadeDias = Number(prompt("Por Quantos dias o carro foi alugado ? "));
let precoAPagar = ((60 * quantidadeDias) + (0.15 * quantidadeKm)).toFixed(2);
console.log("Preço a pagar: R$ " + precoAPagar);