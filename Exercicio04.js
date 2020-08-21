let kmRodado = prompt("Quantos km você pecorreu com o carro?")
let diasDeUso = prompt("Por quantos dias você alugou o carro?")
let valorTotal = ( Number(kmRodado) * 0.15 ) + ( Number(diasDeUso) * 60 )
console.log("O valor total a pagar é R$ " + valorTotal)