//********************** Exercício 1 **********************
let temperaturaCelsius = Number(
  prompt("Digite uma temperatura em graus Celsius: ")
);

let temperaturaFahrenheit = ((9 * temperaturaCelsius) / 5 + 32).toFixed(2);

alert("Equivale a " + temperaturaFahrenheit + " graus Fahrenheit");
