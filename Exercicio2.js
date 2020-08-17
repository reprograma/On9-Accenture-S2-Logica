//Lista de exercícios

//2 - Faça agora o contrário, de Fahrenheit para Celsius.

let temperaturaFahrenheit = Number(
  prompt('Digite o valor da temperatura em Fahrenheit: ')
);
let termperaturaConvertida = ((temperaturaFahrenheit - 32) * 5) / 9;
console.log('A temperatura em Celsius é de ' + temperaturaConvertida + ' °C.');
