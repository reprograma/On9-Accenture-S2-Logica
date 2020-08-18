/* 8 - Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não.  */

let year = parseInt(prompt("Qual ano você quer analisar?"));

if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
    console.log("O ano " + year + " é bissexto.");
} else {
    console.log("O ano " + year + " não é bissexto.");
}
