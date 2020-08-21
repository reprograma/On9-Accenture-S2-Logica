//var 1 = entrada ano digitado
var anoDigitado = document.querySelector("#ano-digitado");

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo bissexto. Um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100.
//Anos bissextos: 1980, 1984, 1988, 1992, 1996 e 2000.
function calcularAnoBissexto(){
    var anoInformado = anoDigitado.valueAsNumber;

    if(anoInformado % 400 == 0 || anoInformado % 4 == 0 && anoInformado % 100 != 0){
        resultado.textContent = anoInformado + " é bissexto";
    }else{
        resultado.textContent = anoInformado + " não é bissexto.";
    }
   
}