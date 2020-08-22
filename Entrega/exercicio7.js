let cigarrosDia = Number(prompt("Quantos cigarros você fuma por dia?"))
let tempo = Number(prompt("Há quantos anos você fuma?"))

let tempoTotal = (tempo * 365);
let cigarroTotal= (cigarrosDia * tempoTotal);

let tempoPerdido = ((cigarroTotal * 10) / 1440).toFixed ();

console.log 
("Você furmou até agora na vida inteira um total de", cigarroTotal, "cigarros e por isso já perdeu", tempoPerdido, "dias de vida");
 
