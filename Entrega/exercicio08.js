//8 - Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não.

let ano = Number(prompt("Digite um ano: "));

// Se o ano não for divisivel por 100, mas for por 4 ou 400 ele entra no if
if (ano % 100 !== 0 && ano % 4 === 0 || ano % 400 === 0) {
    alert(ano + " é bissexto");
    console.log(ano + " é bissexto");
} else {
    alert(ano + " não é bissexto");
    console.log(ano + " não é bissexto");
}