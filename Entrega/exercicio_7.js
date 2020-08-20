//7 - Escreva um programa para calcular a redução do tempo de vida de um fumante. 
//Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. 
//Considere que um fumante perde 10 minutos de vida a cada cigarro, 
//calcule quantos dias de vida um fumante perderá. Exiba o total de dias.

let quantidade = Number(prompt("Quantos cigarros você fuma por dia?"))
let tempo = Number(prompt("Há quantos anos você é fumante?"))
anos = tempo * 365 //dias

var total_cigarros = quantidade * anos //total de cigarros fumados
var tempo_vida = (((total_cigarros * 10) / 24)/anos).toFixed(2) //10 são os minutos e 24 é o valor da hora/dia

console.log("Você fumou " +total_cigarros+ " e por isso perdeu " +tempo_vida+ " anos de vida.")