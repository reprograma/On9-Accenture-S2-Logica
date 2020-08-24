var cigarros = Number(prompt("Qual a quantidade de cigarros que você fuma por dia?"))
var anos = Number(prompt("Há quantos anos você fuma?"))
calculoMinutos = (cigarros*365*anos)*10 //minutos perdidos
calculoDias = (calculoMinutos/1440).toFixed(2)
console.log("De acordo com o seu consumo de cigarro até hoje, você já perdeu " + calculoDias + " dias de vida!")