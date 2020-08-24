const kilometersDriven = Number(
  prompt("Digite a quantidade de km percorridos: ")
);

const quantityDays = Number(prompt("Digite a quantidade de dias de aluguel: "));

const priceByDay = 60.0;
const priceByKm = 0.15;

const totalPrice = kilometersDriven * priceByKm + quantityDays * priceByDay;

console.log("O preço total a ser pago é de R$" + totalPrice.toFixed(2));
