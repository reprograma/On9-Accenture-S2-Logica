// 2 - Faça agora o contrário, de Fahrenheit para Celsius.

let tempFahrenheit = prompt("Digite a temperatura que você quer converter (em Fahrenheit):");
let tempCelsius = (tempFahrenheit - 32) * 5/9;

console.log(tempFahrenheit + "°F corresponde a " + tempCelsius.toFixed(2) + "°C");