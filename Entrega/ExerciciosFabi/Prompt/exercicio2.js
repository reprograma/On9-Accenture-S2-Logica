//Enunciado:
//2 - Faça agora o contrário, de Fahrenheit para Celsius.
//(32 °F − 32) × 5/9 = 0 °C

//opção 1
let valor = prompt("Qual a temperatura está no momento em Fahrenheit?")
let conta = ((Number(valor)- 32) * 5)/9

console.log("A temperatura em graus Celcius é "+conta)


//opção 2
let valor = (Number(prompt("Qual a temperatura está no momento em Fahrenheit?"))-32)*5/9
console.log("A temperatura em graus Celcius é "+valor.toFixed(0))
