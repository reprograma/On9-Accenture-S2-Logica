let pesoPeixe = prompt("Olá, senhor José, quantos quilos de peixe você pegou hoje?")
let multa = 0
let excesso = 0
if(pesoPeixe <= 50) {
    console.log("Você obteve "+ excesso + " de excesso e " +multa + " de multa") 
}
else {
    excesso = pesoPeixe - 50
    multa = excesso*4
    console.log("Você obteve "+ excesso + " de quilos em excesso e R$ " +multa + " de multa") 
    
}