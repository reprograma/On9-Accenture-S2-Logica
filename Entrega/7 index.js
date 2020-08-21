let cigarroDia = Number(prompt("Qantos cigarros você fuma por dia?"))
let tempo = Number(prompt("Quanto tempo você fuma?"))

let cigarroMinuto = (cigarroDia * 10)
let horasDosCigarros = (cigarroMinuto / 60)
let ano = (tempo * 365)

let horasTotais = ((horasDosCigarros * ano) / (1))

let diasTotais = (horasTotais / 24).toFixed()

console.log("Você perdeu " + diasTotais + " dias de vida")