console.log("Digite 5 notas para que a media seja calculada")
let nota1 = parseFloat(prompt("Nota 1:"))
let nota2 = parseFloat(prompt("Nota 2:"))
let nota3 = parseFloat(prompt("Nota 3:"))
let nota4 = parseFloat(prompt("Nota 4:"))
let nota5 = parseFloat(prompt("Nota 5:"))

let media = (nota1 + nota2 +nota3 +nota4 + nota5) / 5

if(media >= 7) {
    console.log("Parabens! Voce foi aprovado(a) "+media)
}
else if(media < 5){
    console.log("Infelizmente voce foi reprovado. Estude mais!")
}
else if(media >= 5 && media < 7) {
    console.log("Voce está de recuperação. Estude!")
}
