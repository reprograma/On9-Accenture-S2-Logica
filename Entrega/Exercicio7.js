//Escreva um programa para calcular a redução do tempo de vida de um fumante. 
//Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. Considere que 
//um fumante perde 10 minutos de vida a cada cigarro, 
//calcule quantos dias de vida um fumante perderá. Exiba o total de dias.

let cigarrosPorDia = Number(prompt("Quantos cigarros você fuma por dia?"))
let cigarroAnos = Number(prompt("Você fuma há quantos anos?"))
let tempoPerdidoPorCigarro = 10
let minutosPerdidosTotal = cigarrosPorDia*tempoPerdidoPorCigarro*365
let diasPerdidos = ((minutosPerdidosTotal/60)/24)

let diasPerdidosInt = Math.trunc(diasPerdidos)
let horasPerdidas = ((diasPerdidos-diasPerdidosInt)*24)

let horasPerdidasInt =  Math.trunc(horasPerdidas)
let minutosPerdidos = ((horasPerdidas-horasPerdidasInt)*60)
let minutosPerdidosInt = Math.trunc(minutosPerdidos)

console.log("dias perdidos: "+diasPerdidosInt +" // horas perdidas: " + horasPerdidasInt + " // minutos perdidos: " + minutosPerdidosInt)

//consertar formula