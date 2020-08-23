//7 - Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
//Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos dias de vida
// um fumante perderá. Exiba o total de dias.

let quantityOfCigarettes = Number(
  prompt('Quantos cigarros você fuma por dia? ')
);
let numberOfYears = Number(prompt('Há quantos anos que você fuma? '));

totalYears = 365 * numberOfYears;
total = (quantityOfCigarettes * totalYears * 10).toFixed(2);

day = (total / 1440).toFixed(2);
amount = (quantityOfCigarettes * totalYears * 7).toFixed(4);

console.log(
  'Você perderá ' +
    day +
    ' dias da sua vida, fumando ' +
    quantityOfCigarettes +
    ' cigarros, durante ' +
    numberOfYears +
    ' anos. E gastará, em média, ' +
    amount +
    ' reais. '
);
