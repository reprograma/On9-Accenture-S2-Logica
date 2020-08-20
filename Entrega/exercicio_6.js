//Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluna foi aprovada, 
//reprovada ou ficou em recuperação. Regras:
//para ser aprovada a média tem que ser maior ou igual 7
//para ser reprovada a média tem que ser menor que 5
//para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7

let nota1 = Number(prompt("Digite sua 1 nota:"))
let nota2 = Number(prompt("Digite sua 2 nota:"))
let nota3 = Number(prompt("Digite sua 3 nota:"))
let nota4 = Number(prompt("Digite sua 4 nota:"))
let nota5 = Number(prompt("Digite sua 5 nota:"))

var soma = (nota1 + nota2 + nota3 + nota4 + nota5)
var media = (soma/5).toFixed(2)

if (media > 7) {
    console.log ("Sua média é " + media+ ". Você está Aprovada!")
} else if (media < 5) {
    console.log("Sua média é " + media+ ". Você está Reprovada!")
} else {
    console.log("Sua média é " + media+ ". Você está na recuperação.")
}
