let note_1 = Number(prompt("Insira 1º nota: "))

let note_2 = Number(prompt("Insira 2º nota: "))

let note_3 = Number(prompt("Insira 3º nota: "))

let note_4 = Number(prompt("Insira 4º nota: "))

let note_5 = Number(prompt("Insira 5º nota: "))

let sum = note_1 + note_2 + note_3 + note_4 + note_5

let average = sum /5


if(average >= 7){
    console.log("**Aprovada**")

}else if(average < 5){
    console.log("**Reprovada**")

}else if(average >= 5 && average < 7){
    console.log("**Recuperação**")
}

