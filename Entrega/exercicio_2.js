'use strict';

function conversionFToC() {
  let farenheit = parseFloat(
    prompt("Por favor, informe a temperatura em Farenheit: ")
  );
  let calculo = ((farenheit - 32) * 5) / 9;

  console.log(`A temperatura convertida é de ${calculo}°C.`);
}

conversionFToC();