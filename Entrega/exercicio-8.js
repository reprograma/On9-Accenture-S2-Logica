//********************** Exercício 8 **********************

/* Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não. */

let ano = Number(prompt("Digite um ano: "));

if (ano % 400 == 0) {
  console.log(ano + " Ano bissexto!");
} else if (ano % 4 == 0 && ano % 100 != 0) {
  console.log(ano + " Ano bissexto!");
} else {
  console.log(ano + " Ano NÃO bissexto!");
}
