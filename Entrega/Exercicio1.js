// Lista de exercícios
// 1 - Converta uma temperatura digitada em Celsius para Fahrenheit.

let temperatureCelsius = Number(
  prompt('Digite o valor da temperatura em Celsius: ')
);
let convertedTemperature = (9 * temperatureCelsius) / 5 + 32;
console.log(
  'A temperatura em Fahrenheit é de ' + convertedTemperature + ' °F.'
);
