// 6 - Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluna foi aprovada, 
//reprovada ou ficou em recuperação. Regras:
//para ser aprovada a média tem que ser maior ou igual 7
//para ser reprovada a média tem que ser menor que 5
//para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7

// alunoAprovado

let notaUm = 7
let notaDois = 6
let notaTres = 8
let notaQuatro = 7
let notaCinco = 9
let totalNotas = (notaUm + notaDois + notaTres + notaQuatro + notaCinco) / 5

let mediaAprovado = 7
if (totalNotas  >= 7) {
    console.log("aluno aprovado com a nota " + totalNotas)
}
 else if (totalNotas < 5) {
     console.log("aluno reprovado com a nota" + totalNotas) 
}
else {
    console.log("aluno de recuperacao" + totalNotas)
}

