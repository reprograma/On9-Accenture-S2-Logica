let apresentacao = alert ("Esse programa irá identificar se você foi aprovada, reprovada ou está em recuperação.")
let notaUm = prompt ("Digite a nota 1")
let notaDois = prompt("Digite a nota 2")
let notaTres = prompt("Digite a nota 3")
let notaQuatro = prompt("Digite a nota 4")
let notaCinco = prompt("Digite a nota 5")
var media = (Number(notaUm) + Number(notaDois)  + Number(notaTres) + Number(notaQuatro) + Number(notaCinco) ) / 5

if ( media >= 7) {
        console.log (" Sua média foi: " + media + " Você está aprovada ! ")
} else if ( media >= 5 && media < 7) {
    console.log (" Sua média foi: " + media + " Você está em recuperação!")
}
else{
    console.log("Sua média foi: " + media + " Você está reprovada!")
}