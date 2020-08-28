//Enunciado
//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado 
//pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.


var km = 100
var dias = 10
console.log("Você pagará de multa R$"+((dias*60)+(km*0.15)).toFixed(2)+" reais.")