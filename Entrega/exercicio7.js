const quantidadeCigarrosPorDia = prompt(
  "Digite a quantidade de cigarros fumados por dia:"
);
const quantidadeDeAnos = prompt("Por quantos anos:");

const quantidadeDiasPorAno = 365; //dias
const quantidadeDeMinutosPorDia = 1440; // minutos
const tempoPerdidoPorCigarro = 10; // minutos
const totalDeCigarros =
  quantidadeCigarrosPorDia * quantidadeDiasPorAno * quantidadeDeAnos;

console.log("Total de cigarros foi de " + totalDeCigarros);

const tempoPerdidoEmMinutos = tempoPerdidoPorCigarro * totalDeCigarros;
const tempoPerdidoEmDias = tempoPerdidoEmMinutos / quantidadeDeMinutosPorDia;

console.log(
  "O tempo perdido do fumante foi de aproximadamente " +
    tempoPerdidoEmDias +
    " dias"
);
