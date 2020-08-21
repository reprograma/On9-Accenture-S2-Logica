let cigarrosDia = Number(prompt("Quantos cigarros por dia?"))

let anosFumo = Number(prompt("Quantos anos é fumante?"))

let somaCigarro = cigarrosDia * 0.16

let somaAno = somaCigarro * 365

let somaTotal = somaCigarro * anosFumo

console.log ( "Você perderá "    + somaTotal.toFixed()  +   " dias de vida, devido ao fumo ")
