let nota1 = Number(prompt("Digite sua primeira nota"))
let nota2 = Number(prompt("Digite sua segunda nota"))
let nota3 = Number(prompt("Digite sua terceira nota"))
let nota4 = Number(prompt("Digite sua quarta nota"))
let nota5 = Number(prompt("Digite sua quinta nota"))

let notaMedia = ((nota1 + nota2 + nota3 + nota4 + nota5) /5)
console.log ("Sua media foi" , notaMedia )

if (notaMedia >= 7){
    console.log ("Você foi aprovado")
}

else if (notaMedia < 5){
    console.log ("Você foi reprovado")

}
else{
    console.log ("Você está em recuperação")
}

