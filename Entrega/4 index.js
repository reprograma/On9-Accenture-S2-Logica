
let kmCarro = Number(prompt("Quantos quilometros o carro percorreu?"))
let diasAlugelCarro = Number(prompt("Qual a quantidade de dias que você alugou o carro?"))
let valorApagar = (kmCarro * 0.15) + (diasAlugelCarro * 60)

console.log("O valor a ser pago é " + valorApagar + " reais")
