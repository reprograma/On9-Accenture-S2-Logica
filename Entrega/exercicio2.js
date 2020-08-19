const temperaturaFahrenheit = prompt(
  "Digite a temperatura em Fahrenheit que você deseja converter para Celsius"
);

const temperaturaCelsius = ((temperaturaFahrenheit - 32) * 5) / 9;

alert(
  "A temperatura " +
    temperaturaFahrenheit +
    " F equivale a " +
    temperaturaCelsius +
    " °C"
);
