const temperaturaCelsius = prompt(
  "Digite a temperatura em Celsius que você deseja converter para Fahrenheit"
);

const temperaturaFahrenheit = (9 * temperaturaCelsius) / 5 + 32;

alert(
  "A temperatura " +
    temperaturaCelsius +
    " °C equivale a " +
    temperaturaFahrenheit +
    " F"
);
