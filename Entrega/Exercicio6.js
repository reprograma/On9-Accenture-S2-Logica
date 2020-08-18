//6 - Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.
//Regras:

//para ser **aprovada** a média tem que ser maior ou igual 7

//para ser **reprovada** a média tem que ser menor que 5

//para ir para **recuperação** a média tem que ser maior ou igual a 5 e menor que 7

let firstNote = Number(prompt('Informe nota de número 1: '));
let secondNote = Number(prompt('Informe nota de número 2: '));
let thirdNote = Number(prompt('Informe nota de número 3: '));
let fourthNote = Number(prompt('Informe nota de número 4: '));
let fifthNote = Number(prompt('Informe nota de número 5: '));
let resultado = firstNote + secondNote + thirdNote + fourthNote + fifthNote;

if (resultado / 5 >= 7) {
  console.log('Parabéns, você foi Aprovado!!!!');
} else if (resultado / 5 < 5) {
  console.log(
    'Infelizmente você não foi aprovado. Mas não fique triste, ano que vem tente novamente.'
  );
} else {
  console.log('Você ficou de recuperação, estude mais um pouco !!');
}
