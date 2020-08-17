// Lista de exercícios
// 1 - Converta uma temperatura digitada em Celsius para Fahrenheit.

let temperaturaCelsius = parseFloat(
  prompt('Digite o valor da temperatura em Celsius: ')
);
let temperaturaConvertida = (9 * temperaturaCelsius) / 5 + 32;
console.log(
  'A temperatura em Fahrenheit é de ' + temperaturaConvertida + ' °F.'
);
