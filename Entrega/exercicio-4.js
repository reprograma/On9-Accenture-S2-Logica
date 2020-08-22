let km
let dias
let vKM
let vDias
let vTotal

do{
    km = parseFloat(prompt("Digite a quantidade de KM percorrida (maior que 0)"))
}while(km <= 0)

do{
    dias = parseFloat(prompt("Digite a quantidade de dias alugados (no min 1)"))
}while(dias < 1)

vKM = km * 0.15
vDias = dias * 60
vTotal = vKM + vDias

console.log("Valor KM: R$" + vKM.toFixed(2))
console.log("Valor dias: R$" + vDias.toFixed(2))
console.log("Valor total a pagar: R$" + vTotal.toFixed(2))