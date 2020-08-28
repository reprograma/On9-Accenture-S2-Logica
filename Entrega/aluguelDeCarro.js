function calculoDePagamento(quilometragemRodada,diasDeUso){
    const precoPorQuilometro = 0.15
    const precoPorDias = 60
    const valorKmRodado = quilometragemRodada * precoPorQuilometro
    const valorDiasDeUso = precoPorDias * diasDeUso
    return valorKmRodado + valorDiasDeUso
}
const quilometragemRodada = Number(prompt("quantos quilometros você rodou?"))
const diasDeUso = Number(prompt("quantos dias você passou usando o carro?"))
calculoDePagamento(quilometragemRodada,diasDeUso)