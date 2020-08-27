//********************** Exercício 7 **********************

/* Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos dias de vida um fumante perderá. Exiba o total de dias. */

let quantidadeCigarros = Number(
  prompt("Digite a quantidade de cigarros fumados por dia: ")
);
let quantidadeAnos = Number(
  prompt("Digite a quantidade de anos que você já fumou: ")
);

let totalDias = quantidadeAnos * 365;
let totalCigarros = quantidadeCigarros * totalDias;

let diasPerdidos = ((totalCigarros * 10) / 1440).toFixed();

alert("Você já perdeu " + diasPerdidos + " dias de vida!");
