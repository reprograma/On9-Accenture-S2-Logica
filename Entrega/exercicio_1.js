'use strict';

function conversionCToF() {
  let celsius = parseFloat(
    prompt("Por favor, informe a temperatura em Celsius: ")
  );
  let calculo = 9 * (celsius / 5) + 32;

  console.log(`A temperatura convertida é de ${calculo}°F.`);
}

conversionCToF();