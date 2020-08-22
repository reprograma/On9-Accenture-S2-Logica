/**Exercício 6 - Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluna foi aprovada, 
 * reprovada ou ficou em recuperação. Regras:
 * para ser aprovada a média tem que ser maior ou igual 7
 * para ser reprovada a média tem que ser menor que 5
 * para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7
 * 
 */

let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let nota3 = Number(prompt("Digite a terceira nota: "))
let nota4 = Number(prompt("Digite a quarta nota: "))
let nota5 = Number(prompt("Digite a quinta nota: "))
let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if (media >=7){
    console.log("Você está aprovada!")
} else if (media <5){
    console.log("Você foi reprovada!")
} else if (media >=5 && media <7){
    console.log("Você está de recuperação!")
}