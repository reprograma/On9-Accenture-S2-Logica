// Fórmula: 9*Celsius/5 + 32

const celsios = Number(prompt("Digite a temperatura em Celsios:"));
const farenheit = (9 * celsios) / 5 + 32;

console.log(
  celsios + "° Celsios equivalem a " + farenheit.toFixed(2) + " ° Farenheit"
);
