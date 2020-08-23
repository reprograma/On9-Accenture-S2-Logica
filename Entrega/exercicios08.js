let anoBissexto = Number(prompt("Digite um número"))

if ((anoBissexto / 4 == 0) && (anoBissexto / 100 > 0) && (anoBissexto / 400 == 0)) {
    console.log("O ano é bissexto")
} else {
    console.log("O ano não é bissexto")
}