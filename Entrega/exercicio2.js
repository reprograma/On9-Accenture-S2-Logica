/* Exercício 2 - Converter uma temperatura digitada em Fahrenheit para Celsius

C= (0X F-32) * 5/9
*/

let temperaturaF = prompt("Digite uma temperatura em Fahrenheit: ")
let temperaturaC = (temperaturaF - 32) * (5 / 9)
console.log("A temperatura digitada em Fahrenheit convertida para Celsius é: " + temperaturaC)