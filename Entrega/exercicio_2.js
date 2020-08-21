//2 - Converta uma temperatura digitada em Fahrenheit para Celsius.

let Fahrenheit = Number(prompt("Digite valor da temperatura em Fahrenheit para converter em Celsius:"))
let Celsius = ((Fahrenheit - 32) * 5/9).toFixed(2)
console.log("O valor em Celsius é " + Celsius)