const quantidadeKm = prompt(
  "Qual foi a quantidade de quilometros que voce percorreu com o carro?"
);
const quantidadeDias = prompt(
  "Qual foi a quantidade de dias que voce alugou o carro ?"
);

const custoPorDia = 60; //reais
const custoPorKm = 0.15; //reais

const valorAPagarPorDia = quantidadeDias * custoPorDia;
const valorAPagarPorKm = quantidadeKm * custoPorKm;

const valorTotal = valorAPagarPorDia + valorAPagarPorKm;

alert(
  "O valor total a ser pago para " +
    quantidadeDias +
    " dias e " +
    quantidadeKm +
    "km é de " +
    valorTotal +
    " reais"
);
