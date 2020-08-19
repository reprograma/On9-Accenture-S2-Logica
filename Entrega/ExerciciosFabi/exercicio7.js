//#### Extras
//7 - Escreva um programa para calcular a redução do tempo de vida de um fumante. 
//Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. 
//Considere que um fumante perde 10 minutos de vida a cada cigarro, 
//calcule quantos dias de vida um fumante perderá. Exiba o total de dias.

let perguntaQtd = prompt("Quantos cigarros você fuma por dia?")
let perguntaTempo = prompt("Há quantos anos vc fuma?")

let cigarros = ((Number(perguntaQtd)*10)/60)/24
let dias = (Number(perguntaTempo)*365)

console.log("Nesse ritmo, você perderá de vida "+(cigarros+dias).toFixed(0)+" dias.")