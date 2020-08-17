//********************** Exercício 2 ********************** (258 °F − 32) × 5/9 = 125,556 °C
let temperaturaFahrenheit = Number(
  prompt("Digite uma temperatura em graus Fahrenheit: ")
);

let temperaturaCelsius = (((temperaturaFahrenheit - 32) * 5) / 9).toFixed(2);

alert("Equivale a " + temperaturaCelsius + " graus Celsius.");
