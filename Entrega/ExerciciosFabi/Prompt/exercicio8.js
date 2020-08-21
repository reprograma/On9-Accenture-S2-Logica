//Extra
//8 - Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não. 

let ano = prompt("Digite um ano:")


if(Number(ano) % 4 === 0){
    console.log("Este é um ano bissexto")
} else {
    console.log("Este não é um ano bissexto")
}