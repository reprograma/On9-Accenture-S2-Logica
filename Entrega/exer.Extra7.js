//Extra

//7 - Escreva um programa para calcular a redução do tempo de vida de um fumante.
//Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
//Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos
//dias de vida um fumante perderá. Exiba o total de dias.

let cigarros = Number(prompt("Quantos cigarros você fuma por dia?")*365)
let anosFumante = prompt("Quantos anos você foi fumante?")*cigarros
let diasPerdidos = parseInt(anosFumante *(-10/60/24))

console.log("Seus dias de vida a menos serão de: " +diasPerdidos)