//7 - Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
//Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos dias de vida
// um fumante perderá. Exiba o total de dias.

let quantidadeDeCigarros = Number(
  prompt('Quantos cigarros você fuma por dia? ')
);
let quantidadeDeAnos = Number(prompt('Há quantos anos que você fuma? '));

totalAnos = 365 * quantidadeDeAnos;
total = (quantidadeDeCigarros * totalAnos * 10).toFixed(2);

day = (total / 1440).toFixed(2);
valorTotal = (quantidadeDeCigarros * totalAnos * 7).toFixed(4);

console.log(
  'Você perderá ' +
    day +
    ' dias da sua vida, fumando ' +
    quantidadeDeCigarros +
    ' cigarros, durante ' +
    quantidadeDeAnos +
    ' anos. E gastará, em média, ' +
    valorTotal +
    ' reais. '
);
