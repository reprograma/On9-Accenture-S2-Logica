//O triângulo isósceles tem 2 lados iguais
//O triângulo equilatero tem os 3 lados iguais.
//O triângulo escaleno todos os lados são diferentes

//var 1 = para o lado a do triângulo. 
var ladoA = document.querySelector("#lado-a");

//var 2 = para o lado b.
var ladoB = document.querySelector("#lado-b");

//var 3 = para o lado c.
var ladoC = document.querySelector("#lado-c");

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function tipoTriangulo(){
    var a = ladoA.valueAsNumber;
    var b = ladoB.valueAsNumber;
    var c = ladoC.valueAsNumber;
    
    if(a == b && b == c){
        resultado.textContent = "Esse triângulo é equilátero.";
    }else if( a != b && b!=c && c!=a){
        resultado.textContent = "Esse triângulo é escaleno.";
    }else{
        resultado.textContent = "Esse triângulo é isósceles.";
    }
}