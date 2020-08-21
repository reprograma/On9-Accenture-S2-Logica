let cigarrosPorDias = Number(prompt('Quantos cigarros você geralmente fuma por dia?'));
let anosComoFumante = Number(prompt('Você é fumante há quantos anos?'));
let diasNoAno = 365;
let tempoPerdidoPorDia = (cigarrosPorDias*10);
let tempoTotalPerdidoEmDias = Math.round(((anosComoFumante*diasNoAno*tempoPerdidoPorDia)/60)/24);

console.log('Fumando, você perderá aproximadamente ' + tempoTotalPerdidoEmDias + ' dias de vida');
