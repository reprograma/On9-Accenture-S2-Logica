//var 1 = temperatura celsius que desejamos converter para fahrenheit
var tempCelsius = document.querySelector("#temp-celsius");

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function calcularTemperaturaFahrenheit(){
    var tempFahrenheit = (9 * tempCelsius.valueAsNumber)/5 + 32;
    resultado.textContent = tempFahrenheit;
}