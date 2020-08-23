//Enunciado
//6 - Crie um programa que vai receber 5 notas e vai calcular a 
//média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.Regras:
//para ser **aprovada** a média tem que ser maior ou igual 7
//para ser **reprovada** a média tem que ser menor que 5
//para ir para **recuperação** a média tem que ser maior ou igual a 5 e menor que 7

var nota1 = 4
var nota2 = 4
var nota3 = 4
var nota4 = 4
var nota5 = 4

var media = (nota1+nota2+nota3+nota4+nota5)/5

if(media < 5 ){
    console.log("Vc foi reprovada :(")
} else if (media >= 7){
    console.log("Vc foi aprovada :)")
} else {
    console.log("Vc esta de recuperação :/")
}