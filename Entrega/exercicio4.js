let quilometro = prompt("Digite a quantidade de quilometros percorridos: ")
let dias = prompt("Qual a quantidade de dias que o carro foi alugado?")

let valorKm = quilometro*0.15
let valorDias =  60*dias
let valorTotal = valorKm + valorDias

console.log("O valor gasto foi de: R$ "+valorTotal)