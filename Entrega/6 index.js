let nota1 = Number(prompt("Digite a 1° nota"))
let nota2 = Number(prompt("Digite a 2° nota"))
let nota3 = Number(prompt("Digite a 3° nota"))
let nota4 = Number(prompt("Digite a 4° nota"))
let nota5 = Number(prompt("Digite a 5° nota"))

let media = ((nota1 + nota2 + nota3 + nota4 + nota5) / 5)

if (media >= 7){
    console.log("Aprovada")
}
if (media < 5) {
    console.log("Reprovada")
}
if (media >= 5 <7) {
    console.log("Recuperação")
}

