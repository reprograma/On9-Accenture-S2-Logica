let temperaturaFahrenheit = Number(prompt("Insira a temperatura em Fahrenheit"));
let temperaturaCelsius = ((temperaturaFahrenheit - 32)/1.8).toFixed(2);
console.log(temperaturaFahrenheit + "ºF equivalem a " + temperaturaCelsius + "ºC");
