//var 1 = quantidade de cigarro fumados por dia.
var cigarrosNoDia = document.querySelector("#cigarro-dia");

//var 2 = quantos anos ele fumou.
var anosFumando = document.querySelector("#anos-fumando");

//o ano tem 365 dias.
var ano = 365;

//o dia tem 24 horas.
var dia = 24;

//a hora tem 60 minutos.
var hora = 60;

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function calcularDiasVida(){
    var quantidadeCigarrosDia = cigarrosNoDia.valueAsNumber;
    var anosFumou = anosFumando.valueAsNumber;

    var totalDiasAno = anosFumou * 365;
    var totalCigarrosAno = totalDiasAno * quantidadeCigarrosDia;
    var minutosPerdido = totalCigarrosAno * (-10);
    var horasPerdidas = minutosPerdido / hora;
    var diasPerdidos = horasPerdidas / dia; 

    resultado.textContent = -parseInt(diasPerdidos);
}