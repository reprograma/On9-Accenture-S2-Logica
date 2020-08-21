let quantidadeCigarros = prompt("Quantos cigarros voce fuma por dia")
let quantidadeAnos = prompt("Há quantos anos voce fuma?")


let perde = (quantidadeAnos*365) * quantidadeCigarros  

let perdeEmMinutos= perde * 10

let perdeEmDias = (perdeEmMinutos/60) / 24

console.log("Você perdeu " + perdeEmDias.toFixed(2) + " dias da sua vida")





