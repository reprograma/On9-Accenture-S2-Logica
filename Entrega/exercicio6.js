
//exercicio 6

let objetivo = alert("insira 5 notas para saber se você foi aprovada, reprovada ou está em recuperação.") 

let primeiraNota = Number(prompt("insira a primeira nota"));
let segundaNota = Number(prompt("insira a segunda nota"));
let terceiraNota = Number(prompt("insira a terceira nota"));
let quartaNota = Number(prompt("insira a quarta nota"));
let quintaNota = Number(prompt("insira a quinta nota"));

let média = (primeiraNota+segundaNota+terceiraNota+quartaNota+quintaNota)/5

if(média>=5 && média<7) {
    console.log("a estudante está em recuperação.")
}

else if(média>=7) {
    console.log("a estudante foi aprovada!")
}

else if(média<5) {
    console.log("a estudante foi reprovada..")
}