//6 - Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a
//aluna foi aprovada, reprovada ou ficou em recuperação.
//Regras:

//para ser **aprovada** a média tem que ser maior ou igual 7
//para ser **reprovada** a média tem que ser menor que 5
//para ir para **recuperação** a média tem que ser maior ou igual a 5 e menor que 7

let nota1 = prompt("Digite a nota 1")
let nota2 = prompt("Digite a nota 2")
let nota3 = prompt("Digite a nota 3")
let nota4 = prompt("Digite a nota 4")
let nota5 = prompt("Digite a nota 5")

let media = (nota1 + nota2 + nota3 + nota4 + nota5)/5

if(media >= 7){ 
    console.log("Aprovada")
}
else if(media < 7){
    console.log("Reprovada")
}
else{ 
    console.log("Recuperação")
}
