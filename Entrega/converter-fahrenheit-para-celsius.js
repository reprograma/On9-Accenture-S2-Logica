let fahrenheitTemperature = prompt("Digite a temperatura em graus Fahrenheit (°F)");
fahrenheitTemperature = fahrenheitTemperature.replace(/,/g, '.');
let celsiusTemperature = Number(((fahrenheitTemperature - 32) * (5/9)));

console.log("A temperatura em Celsius é: " + celsiusTemperature.toFixed(2) + "°C");