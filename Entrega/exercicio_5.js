"use strict";

function checaTriangulo() {
  let ladoA = parseInt(prompt("Informe a medida do lado a: "));
  let ladoB = parseInt(prompt("Informe a medida do lado b: "));
  let ladoC = parseInt(prompt("Informe a medida do lado c: "));

  if (ladoA >= 0 && ladoB >= 0 && ladoC >= 0) {
    if (ladoA == ladoB && ladoB == ladoC) {
      console.log("É um triângulo equilátero.");
    } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
      console.log("é um triângulo isóceles.");
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
      console.log("É um triângulo escaleno.");
    }
  } else {
    console.log("Não é um triângulo.");
  }
}

checaTriangulo();
