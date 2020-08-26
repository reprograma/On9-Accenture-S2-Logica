let kilometersTraveled = prompt("Digite a quantidade de quilometros percorridos: ");
kilometersTraveled = kilometersTraveled.replace(/,/g, '.');
const valuePerKm = Number(0.15 * kilometersTraveled);

let rentedDays = Number(prompt("Quantos dias o carro ficou alugado? "));
const valuePerDayCar = Number(60 * rentedDays);

let carRentalPrice = (valuePerDayCar + valuePerKm).toFixed(2);

console.log("O preço a pagar pelo carro alugado é: R$" + carRentalPrice + " reais!");