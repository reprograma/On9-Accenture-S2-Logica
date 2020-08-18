let temperaturaFahrenheit =  prompt ("Olá, esse programinha irá converter temperaturas de Fahrenheit para Celsius. Digite a sua temperatura em Fahrenheit:");
let formulaConversao = (( Number(temperaturaFahrenheit) - 32 ) / 1.8);
alert = ("A temperatura que você digitou em Fahrenheit equivale a :"  + formulaConversao.toFixed(2) + " Celsius.");