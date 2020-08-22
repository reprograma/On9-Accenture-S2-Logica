// 8 - Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não.

let anoBissexto = prompt("insira o ano")

if (anoBissexto % 4 == 0 && (anoBissexto % 400 == 0 || anoBissexto % 100 != 0)) {
    console.log(anoBissexto + " é ano bissexto")
} else {
    console.log(anoBissexto + " não é ano bissexto")
}

//ok falta fazer commit