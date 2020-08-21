//var 1 = peso do peixe
var valorPesoPeixe = document.querySelector("#peso-peixe");

//var 2 = multa por quilo exedente
const multaQuiloExedente = 4;

//var 3 = valor da multa a pagar
var valorMultaPagar = 0;

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function calcularMultaPesoPeixe(){
    var valorPeso = valorPesoPeixe.valueAsNumber;
    if(valorPeso >= 50){
        resultadoPesoPeixe = (valorPeso - 50) * multaQuiloExedente;
        resultado.textContent = resultadoPesoPeixe;
    }else{
        resultado.textContent = 0;
    }
}