// var distance = Number(prompt("Qual a distância a ser percorrida, em km:"));
// var velocity = Number(prompt("Qual a velocidade média, em km?"));

var distance = 100;
var velocity = 12;
var timeTravel = distance / velocity;

var hours = parseInt(timeTravel);
// as horas são a parte inteira, então descartamos o resto usando parseInt

//para saber os minutos, multiplicamos o que estava na parte decimal por 60
// para desprezar os segundos a gente também pega somente a parte inteira
var minutes = parseInt((timeTravel - hours) * 60);

console.log(
  "O tempo gasto para concluir a viagem foi de " +
    hours +
    " hora(s) e " +
    minutes +
    " minuto(s)"
);
