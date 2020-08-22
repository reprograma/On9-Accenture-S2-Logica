var temperatura = parseFloat(prompt("Digite uma temperatura em Fahrenheit:"))
var novaTemperatura = ((temperatura-32)/1.8).toFixed(2)
console.log("Essa temperatura equivale, em graus Celsius, a " + novaTemperatura + " ºC")