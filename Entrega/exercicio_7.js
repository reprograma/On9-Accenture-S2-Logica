"use strict";

function desperdicioDeVida() {
  let consumoDiário = parseInt(prompt("Quantos cigarros você fuma por dia?"));
  let anosDeConsumo = parseInt(prompt("Há quantos anos você fuma?"));
  const minutosPerdidos = 10;
  const minutosDoDia = 1440;
  const ano = 365;

  let totalDeDias = anosDeConsumo * ano;
  let totalDeCigarros = consumoDiário * totalDeDias;
  let diasPerdidos = (totalDeCigarros * minutosPerdidos) / minutosDoDia;

  console.log(`Por ter fumado ${totalDeCigarros} você já perdeu ${diasPerdidos.toFixed(2)} dias da sua vida!`);
}

desperdicioDeVida();
