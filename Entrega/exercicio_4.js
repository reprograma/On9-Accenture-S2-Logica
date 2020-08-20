//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
//sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.


let total_Km = Number(prompt("Digite o total de kilometros:"))
let total_Dias = Number(prompt("Digital o total de dias:"))
var total = ((total_Km * 0.15) + (total_Dias * 60)).toFixed(2)
console.log("Total a pagar por " +total_Km+ " KM e por" +total_Dias+ "dias é de: R$" +total  )