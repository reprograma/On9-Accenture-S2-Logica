let cigarrosDia = prompt("Quantos cigarros você fuma por dia?")
let anosFumando = prompt("Há quantos anos você fuma?")
tempoPerdido = (cigarrosDia * (anosFumando * 365)) * 10
diasPerdido = tempoPerdido / 1440
console.log("você já perdeu " + parseInt(diasPerdido) + " dias de vida.")