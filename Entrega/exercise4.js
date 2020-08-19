/* 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado. */

let kmTraveled = parseFloat(prompt("Quantos km foram percorridos?"));
let rentalDays = parseFloat(prompt("Por quantos dias o carro foi alugado?"));

let priceToPay = (60 * rentalDays) + (0.15 * kmTraveled);
console.log("Você deverá pagar: R$" + priceToPay.toFixed(2));