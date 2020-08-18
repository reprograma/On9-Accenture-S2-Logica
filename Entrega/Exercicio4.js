//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo
//usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.

let day = parseFloat(
  prompt('Informe a quantidade de dias de locação do veiculo: ')
);
let kilometerTraveled = parseFloat(
  prompt('Informe quantos kilometros pretende percorrer com o veiculo: ')
);
let kilometerRunResult = kilometerTraveled * 0.15;
let ValueDays = day * 60;
let priceToPay = kilometerRunResult + ValueDays;
console.log(' O valor total a pagar é de ' + 'R$ ' + priceToPay);
