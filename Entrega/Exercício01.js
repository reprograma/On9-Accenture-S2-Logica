var temperatura = parseFloat(prompt("Digite uma temperatura em graus Celsius:"))
var novaTemperatura = ((temperatura*9/5) + 32).toFixed(2)
console.log("Essa temperatura equivale, em Fahrenheit, a " + novaTemperatura + " F!")