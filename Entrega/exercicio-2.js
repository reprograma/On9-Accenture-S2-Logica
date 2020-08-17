//********************** Exercício 2 ********************** 
let temperaturaFahrenheit = Number(
  prompt("Digite uma temperatura em graus Fahrenheit: ")
);

let temperaturaCelsius = (((temperaturaFahrenheit - 32) * 5) / 9).toFixed(2);

alert("Equivale a " + temperaturaCelsius + " graus Celsius.");
