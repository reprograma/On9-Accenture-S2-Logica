var nota1 = parseFloat(prompt("Para calcularmos sua média, precisamos que você nos diga quanto foi sua primeira nota:"))
var nota2 = parseFloat(prompt("Agora a segunda nota:"))
var nota3 = parseFloat(prompt("Agora a terceira nota:"))
var nota4 = parseFloat(prompt("Agora a quarta nota:"))
var nota5 = parseFloat(prompt("Por fim, a quinta nota:"))
var calculo = ((nota1 + nota2 + nota3 + nota4 + nota5)/5).toFixed(2) 
if (calculo >= 7) {
    console.log("Parabéns! Você foi aprovada!")
} else if (calculo < 5){
    console.log("Infelizmente, você foi reprovada!")
} else if (calculo >= 5 && calculo < 7) {
    console.log("Você não foi aprovada, mas terá direito à recuperação!")
}