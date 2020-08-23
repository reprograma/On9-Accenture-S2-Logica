let sideOne = Number(prompt('Informe o lado 1 do triangulo: '));
let sideTwo = Number(prompt('Informe o lado 2 do triangulo: '));
let sideThree = Number(prompt('Informe o lado 3 do triangulo: '));

if (sideOne === sideTwo && sideTwo === sideThree) {
  console.log(
    'Você tem um triangulo Isoceles , ou seja, com dois lados iguais e um diferente'
  );
} else if (
  sideOne === sideTwo ||
  sideOne === sideThree ||
  sideTwo === sideThree
) {
  console.log('Você tem um triangulo Escaleno, ou seja, com três lados iguais');
} else {
  console.log(
    'Você tem um trinngulo Equilatero, ou seja, nenhum dos lados iguais'
  );
}
