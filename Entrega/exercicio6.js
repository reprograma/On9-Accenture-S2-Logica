// 6 - Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.
// Regras:
//para ser aprovada a média tem que ser maior ou igual 7
//para ser reprovada a média tem que ser menor que 5
//para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7

let primeiraNota = Number(prompt ("Digite a primeira nota: "))
let segundaNota = Number(prompt ("Digite a segunda nota: "))
let terceiraNota = Number(prompt ("Digite a terceira nota: "))
let quartaNota = Number(prompt ("Digite a quarta nota: "))
let quintaNota = Number(prompt ("Digite a quinta nota: "))

const media = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota)/5

if (media >= 7) {
    console.log("aprovada")
} else if (media < 7 && media >= 5) {
    console.log("recuperação")
} else {
    console.log("reprovada")
}

