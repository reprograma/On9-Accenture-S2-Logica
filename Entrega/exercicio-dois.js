let temperaturaEmFahrenheit = Number(prompt('Digite o valor da temperatura em Fahrenheit'));

let temperaturaEmCelsius = Math.round(((5*temperaturaEmFahrenheit)-160)/9);
console.log('A temperatura convertida é ' + temperaturaEmCelsius+ '°C');