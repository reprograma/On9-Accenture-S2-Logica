/* 7 - Escreva um programa para calcular a redução do tempo de vida de um fumante. 
Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. 
Considere que um fumante perde 10 minutos de vida a cada cigarro, 
calcule quantos dias de vida um fumante perderá. Exiba o total de dias. */

let quantidadeCigarros = Number(prompt("Quantos cigarros você fuma por dia? "));
let temmpoFumante = Number(prompt("Por quantos anos você fumou? "));

let totalCigarros = (temmpoFumante * 365) * quantidadeCigarros;
let minutosDeVidaPerdidos = (totalCigarros * 10);
// 1 dia tem 1440 minutos (24 horas x 60 minutos)
let diasDeVidaPerdidos = minutosDeVidaPerdidos / 1440;
alert("Dias de vida perdidos: " + diasDeVidaPerdidos);