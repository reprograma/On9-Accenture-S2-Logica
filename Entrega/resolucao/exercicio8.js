// Para melhor entender
// São bissextos todos os anos múltiplos de 400, p.ex: 1600, 2000, 2400, 2800...
// São bissextos todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400, p.ex: 1996, 2000, 2004, 2008, 2012, 2016, 2020...
// Não são bissextos todos os demais anos.

const year = 1900;

if (year % 400 === 0) {
  console.log(year + " é um ano bissexto");
} else if (year % 4 === 0 && year % 100 !== 0) {
  console.log(year + " é um ano bissexto");
} else {
  console.log(year + " não é um ano bissexto");
}
