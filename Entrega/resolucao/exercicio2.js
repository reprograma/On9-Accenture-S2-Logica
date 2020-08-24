//Fórmula: (Farenheit − 32) × 5/9
const farenheit = Number(prompt("Digite a temperatura em Farenheit:"));
const celsios = ((farenheit - 32) * 5) / 9;

console.log(
  farenheit + "° Farenheit equivalem a " + celsios.toFixed(2) + " ° Celsios"
);
