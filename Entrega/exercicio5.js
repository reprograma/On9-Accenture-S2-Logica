const lado1 = prompt("Digite o primeiro lado do triangulo");
const lado2 = prompt("Digite o segundo lado do triangulo");
const lado3 = prompt("Digite o terceiro lado do triangulo");

//equilátero, isósceles ou escaleno.
let tipoDoTriangulo = "Triangulo ";
const aux1 = Number(lado2) + Number(lado3);
const aux2 = Number(lado1) + Number(lado3);
const aux3 = Number(lado1) + Number(lado2);
console.log(aux1 + "" + aux2 + "" + aux3);
if (lado1 < aux1 && lado2 < aux2 && lado3 < aux3) {
  console.log("Triangulo é valido");
  if (lado1 === lado2 && lado1 === lado3) {
    tipoDoTriangulo += "equilátero";
  } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
    tipoDoTriangulo += "escaleno";
  } else {
    tipoDoTriangulo += "isósceles";
  }
  console.log(tipoDoTriangulo);
} else {
  console.log("Triangulo não valido");
}
