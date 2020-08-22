//7 - Escreva um programa para calcular a redução do tempo de vida de um fumante. 
//Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. 
//Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos dias de vida um fumante perderá.
//Exiba o total de dias.

let cigarrosFumadosPorDia 
let anosFumando

cigarrosFumadosPorDia = prompt("Informe a quantidade de cigarros fumados por dia:")
anosFumando = prompt("Informe o quantos anos que fuma:")

let totalCigarros = anosFumando * 365 * cigarrosFumadosPorDia 
let minutosFumando = totalCigarros * 10
let horasFumando = minutosFumando / 60
let diasFumando = horasFumando / 24 
    console.log("dias De Vida Perdidos " + diasFumando)


//ok fazer commit
  
    
 

