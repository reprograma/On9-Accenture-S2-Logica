/* 1 - Converta uma temperatura digitada em Celsius para Fahrenheit. 

> Dica: a formula do Fahrenheit = 9*Celsius/5 + 32 */

let tempCelsius = prompt("Digite a temperatura que você quer converter (em Celsius):");
let tempFahrenheit = (9 * tempCelsius / 5) + 32;

console.log(tempCelsius + "°C corresponde a " + tempFahrenheit + "°F");