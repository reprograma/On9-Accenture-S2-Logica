//Lista de exercícios

//2 - Faça agora o contrário, de Fahrenheit para Celsius.

let temperatureFahrenheit = Number(
  prompt('Digite o valor da temperatura em Fahrenheit: ')
);
let convertedTemperature = ((temperatureFahrenheit - 32) * 5) / 9;
console.log('A temperatura em Celsius é de ' + convertedTemperature + ' °C.');
