//var 1 = quantidade de km percorrido
var quantidadeKmPercorrido = document.querySelector("#quantidade-percorrido");

//var 2 = quantidade de dias alugado
var quantidadeDias = document.querySelector("#quantidade-dias");

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function calcularValorPagar(){
    var valorPorKm = quantidadeKmPercorrido.valueAsNumber * 0.15;
    var valorPorDia = quantidadeDias.valueAsNumber * 60;
    resultado.textContent = valorPorDia + valorPorKm;
   
}