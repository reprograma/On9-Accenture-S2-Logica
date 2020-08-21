'use strict';

function calculoLocacao() {
  // input do usuário
  let km = parseFloat(
    prompt("Por favor, informe a quantidade de quilometros percorridos: ")
  );
  let dias = parseFloat(
    prompt("Por favor, informe a quantidade de dias de locação: ")
  );

  // valores que compõem o cálculo
  let valorDiaria = 60.0;
  let valorPorKm = 0.15;

  // cálculo do valor a pagar
  let totalDiarias = valorDiaria * dias;
  let totalPorKm = valorPorKm * km;
  let totalAPagar = totalDiarias + totalPorKm;

  console.log(totalAPagar);
}

calculoLocacao();