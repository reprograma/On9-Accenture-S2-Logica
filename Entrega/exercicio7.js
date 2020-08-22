/** Exercício (EXTRA) 7 - Escreva um programa para calcular a redução do tempo de vida de um fumante. 
 * Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. 
 * Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos dias de vida um fumante perderá. 
 * Exiba o total de dias.
 * 
 */
let cigarrosPorDia = Number(prompt("Digite a quantidade de cigarros que você fuma por dia: "))
let anosFumando = Number(prompt("Há quantos anos você fuma? Digite a quantidade: "))
let minutosPerdidos = (cigarrosPorDia * 10)
let diasPerdidos = Number(minutosPerdidos + (anosFumando * 365) / 1440) //considerando que 1 dia tem 1440 min. (24h * 60 min)


console.log(" O total de dias perdidos são: " + diasPerdidos + " dias.")