var cigarrosPorDia = Number(prompt("Quantos cigarros você consome diariamente?"));
var anosFumando = Number(prompt("Há quantos anos você fuma?"));
var totalCigarros = cigarrosPorDia * (anosFumando * 365);
var diasPerdidos = ((totalCigarros * 10) / 60) / 24;

console.log ("Você perdeu " + diasPerdidos +" dias!");




