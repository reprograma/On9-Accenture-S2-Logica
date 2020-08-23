//8 - Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não.

function leapYear(ano) {
  let leap = (ano % 4 === 0 && year % 100 != 0) || year % 400 === 0;
  console.log(leap);
}
