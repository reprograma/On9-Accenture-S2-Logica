const lado1 = Number(prompt("Digite o primeiro lado: "));
const lado2 = Number(prompt("Digite o segundo lado: "));
const lado3 = Number(prompt("Digite o terceiro lado: "));

if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
  if (lado1 == lado2 && lado2 == lado3) {
    console.log("Equilatero");
  } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
} else {
  console.log(
    "Algum dos lados que você digitou foi 0 ou negativo. Tente novamente"
  );
}
