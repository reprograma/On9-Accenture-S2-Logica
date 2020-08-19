/* 7 - Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos dias de vida um fumante perderá. Exiba o total de dias. */

let cigarettes = parseFloat(prompt("Quantos cigarros você fuma por dia?"));
let years = parseFloat(prompt("Há quantos anos você fuma?"));

let days = ((cigarettes * (years * 365)) * 0.16).toFixed(2);

console.log("Você já perdeu " + days + " dias de vida.");