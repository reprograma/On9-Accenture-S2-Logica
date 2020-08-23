nota1 = Number(prompt("Digite a nota 01"))
nota2 = Number(prompt("Digite a nota 02"))
nota3 = Number(prompt("Digite a nota 03"))
nota4 = Number(prompt("Digite a nota 04"))
nota5 = Number(prompt("Digite a nota 05"))

media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

if (media >= 7) {
    console.log("Aprovada")
} else if (media <= 5) {
    console.log("Reprovada")
} else {
    console.log("Recuperação")
}