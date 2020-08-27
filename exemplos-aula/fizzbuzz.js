let resultado = "";

if (numero % 3 === 0) {
  resultado = "Fizz";
}

if (numero % 5 === 0) {
  // resultado = resultado + "Buzz"
  resultado += "Buzz";
}

if (resultado === "") {
  resultado = numero;
}

console.log(resultado);
