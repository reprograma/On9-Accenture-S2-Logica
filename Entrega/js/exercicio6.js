//var 1 = primeira nota
var valorNota1 = document.querySelector("#valor-nota1");

//var 2 = segunda nota
var valorNota2 = document.querySelector("#valor-nota2");

//var 3 = terceira nota
var valorNota3 = document.querySelector("#valor-nota3");

//var 4 = quarta nota
var valorNota4 = document.querySelector("#valor-nota4");

//var 5 = quinta nota
var valorNota5 = document.querySelector("#valor-nota5");

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function calcularMedia(){
    var nota1 = valorNota1.valueAsNumber;
    var nota2 = valorNota2.valueAsNumber;
    var nota3 = valorNota3.valueAsNumber;
    var nota4 = valorNota4.valueAsNumber;
    var nota5 = valorNota5.valueAsNumber;
    
    var notasAluna = (nota1 + nota2 + nota3 + nota4 + nota5);
    var mediaAluna = notasAluna/5;
    if(mediaAluna >= 7){
        resultado.textContent = "Você está aprovada. Sua média foi " + mediaAluna; 
    }else if(mediaAluna < 5){
        resultado.textContent = "Você está reprovada. Sua média foi " + mediaAluna;
    }else{
        resultado.textContent = "Você está em recuperação. Sua média foi " + mediaAluna;
    }
}