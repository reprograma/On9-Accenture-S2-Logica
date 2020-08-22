let celsiusTemperature = prompt("Digite a temperatura em graus Celsius (°C)");
celsiusTemperature = celsiusTemperature.replace(/,/g, '.');
let fahrenheitTemperature = Number((celsiusTemperature * (9/5)) + 32);

console.log("A temperatura em Fahrenheit é: " + fahrenheitTemperature.toFixed(2) + "°F");