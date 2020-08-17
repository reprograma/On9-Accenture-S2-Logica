let cigarrosPorDia = Number(prompt("Quantos cigarros você fuma por dia?"));
let anosFumando = Number(prompt("Há quantos anos você fuma?"));
let diasFumando = (anosFumando * 365).toFixed(0);
const minutosPerdidosPorDia = 10/1440;
let tempoPerdido = (cigarrosPorDia * diasFumando * minutosPerdidosPorDia).toFixed(0);
console.log("Perdeu " + tempoPerdido + " dias de vida");