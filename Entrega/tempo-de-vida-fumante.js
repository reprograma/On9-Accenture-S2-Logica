let amountOfCigarettesPerDay = Number(prompt("Quantos cigarros você fuma por dia?"));

let yearsSmoked = Number(prompt("Há quantos anos você fuma? "));
let amountDaysSmoked = (yearsSmoked * 365);

let amountOfCigarettesSmoked = amountDaysSmoked * amountOfCigarettesPerDay;

let daysOfLifeLost = parseInt(amountOfCigarettesSmoked * ((10/60)/24));

console.log("Seu tempo de vida será reduzido em: " + daysOfLifeLost + " dias!");
