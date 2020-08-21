//var 1 = temperatura celsius que desejamos converter para fahrenheit
var tempFahrenheit = document.querySelector("#temp-fahrenheit");

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function calcularTemperaturaCelsius(){
    var tempCelsius = ((tempFahrenheit.valueAsNumber - 32)*5)/9;
    resultado.textContent = tempCelsius;
}