//8-Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não.

let ano = prompt("Digite um ano:")

if (ano%4 == 0 && ano%100 ==0 && ano%400 == 0) {
    console.log("O ano "+ano+ " é bissexto.")
}else if (ano%4 == 0 && ano%100 !=0){
    console.log("O ano "+ano+ " é bissexto.")
}else {
    console.log("O ano " +ano+ " não é bissexto.")
}