//Enunciado
//6 - Crie um programa que vai receber 5 notas e vai calcular a 
//média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.Regras:
//para ser **aprovada** a média tem que ser maior ou igual 7
//para ser **reprovada** a média tem que ser menor que 5
//para ir para **recuperação** a média tem que ser maior ou igual a 5 e menor que 7


let notas1 = prompt("Qual a sua 1ªNota?")
let notas2 = prompt("Qual a sua 2ªNota?")
let notas3 = prompt("Qual a sua 3ªNota?")
let notas4 = prompt("Qual a sua 4ªNota?")
let notas5 = prompt("Qual a sua 5ªNota?")

let total = ((Number(notas1)+Number(notas2)+Number(notas3)+Number(notas4)+Number(notas5))/5)

if (total < 5)     {
    console.log("Reprovada :(")
} else if (total >= 7){
    console.log("Aprovada :)")
} else {
    console.log("Recuperação :/")
}