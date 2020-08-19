const pesoPeixes = prompt("Digite o valor do peso dos peixes:");
const pesoRegulamento = 50; // em kilogramas
const multa = 4; // em reais
let valorAPagarPorExcesso = 0;
let diferencaPeso = pesoPeixes - pesoRegulamento;

if (diferencaPeso > 0) {
  valorAPagarPorExcesso = diferencaPeso * 4;
}

alert(
  "Com o peso de " +
    pesoPeixes +
    " kg o valor da multa por excesso deve ser de: " +
    valorAPagarPorExcesso +
    " reais"
);
