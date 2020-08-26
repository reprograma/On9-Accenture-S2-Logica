let side1 = Number(prompt("Digite o primeiro lado do triângulo: "));
let side2 = Number(prompt("Digite o segundo lado do triângulo: "));
let side3 = Number(prompt("Digite o terceiro lado do triângulo: "));

let result = "";

if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    alert("O valor do lado do triângulo não pode ser ZERO ou NEGATIVO");
    result = "O valor do lado do triângulo não pode ser ZERO ou NEGATIVO";
} else if (((side1 == side2) && (side1 != side3)) || ((side1 == side3) && (side1 != side2)) || ((side2 == side3) && (side2 != side1))) {
    result = "O triângulo é isóceles!";
} else if (side1 == side2 && side1 == side3 && side2 == side3) {
    result = "O triângulo é equilatero!"; 
} else if (side1 != side2 && side1 != side3 && side2 !=side3) {
    result = "O triângulo é escaleno!";
} else {
    result
}

console.log(result);