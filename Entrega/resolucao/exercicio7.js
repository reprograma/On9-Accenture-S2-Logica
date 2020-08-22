const qtdCigarretes = Number(prompt("Cigarros fumados por dia: "));
const qtdYears = Number(prompt("fuma há quantos anos?"));

// regra de 3:
// 1 dia tem 1440 minutos
// 1 cigarro = - 10 minutos
// fumante perde 144 minutos por dia

const totalCigarretes = qtdYears * 365 * qtdCigarretes;
const totalLostDays = totalCigarretes / 144;

console.log("Você perdeu " + Math.round(totalLostDays) + " dias");
