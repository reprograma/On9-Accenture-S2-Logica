let cigarrosDia = Number(prompt("Quantos cigarros você fuma por dia?"));
let anosFumando = Number(prompt("Há quanto tempo você fuma/fumou?"));

// Descobrindo quantos cigarros fumou conforme os anos informados
cigarrosVida = (anosFumando*365)*cigarrosDia;

// Descobrindo quantos minutos fumou conforme quantos cigarros foram fumados
minutosFumando = cigarrosVida * 10;

// Transformando os minutos fumados em hora e depois em dias
diasPerdidos = (minutosFumando/60)/24;

alert("Você perdeu" + Math.round(diasPerdidos) + "dias de vida.");