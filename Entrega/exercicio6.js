console.log("Digite 5 notas para que a media seja calculada")
const nota1 = Number(prompt("Nota 1:"))
const nota2 = Number(prompt("Nota 2:"))
const nota3 = Number(prompt("Nota 3:"))
const nota4 = Number(prompt("Nota 4:"))
const nota5 = Number(prompt("Nota 5:"))

let media = (nota1+nota2+nota3+nota4+nota5) / 5

if(media >= 7) {
    console.log("Parabens! Voce foi aprovado(a)")
}
else if(media < 5){
    console.log("Infelizmente voce foi reprovado. Estude mais!")
}
else if(media >= 5 && media < 7) {
    console.log("Voce está de recuperação. Estude!")
}