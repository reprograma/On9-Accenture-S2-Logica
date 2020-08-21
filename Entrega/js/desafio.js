//var 1 = entrada valor por hora
var valorHora = document.querySelector("#valor-hora");

//var 2 = entrada valor para hora trabalhadas no projeto
var horaProjeto = document.querySelector("#horas-projeto");

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function calcularValorHoraProjeto(){
    var valorHoraProjeto = valorHora.valueAsNumber * horaProjeto.valueAsNumber;
    resultado.textContent = valorHoraProjeto;
}