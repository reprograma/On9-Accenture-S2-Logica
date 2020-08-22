var lado1 = parseFloat(prompt("Vamos brincar de fazer um triângulo? Digite o valor do primeiro lado do triângulo (não digite 0 ou números negativos):"))
var lado2 = parseFloat(prompt("Agora digite o segundo lado:"))
var lado3 = parseFloat(prompt("Agora o terceiro lado:"))
if((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado1 + lado3) > lado2 && lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
    console.log("Massa! Essas medidas são compatíveis com a formação de um triângulo! Além disso, esse triângulo é escaleno! ")
}else if ((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado1 + lado3) > lado2 && lado1 == lado2 && lado1 != lado3){
    console.log("Massa! Essas medidas são compatíveis com a formação de um triângulo! Além disso, esse triângulo é isósceles!")
}else if ((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado1 + lado3) > lado2 && lado1 == lado2 && lado1 == lado3){
    console.log("Massa! Essas medidas são compatíveis com a formação de um triângulo! Além disso, esse triângulo é equilátero!")
}else {
    console.log("Essas medidas não são compatíveis com a formação de um triângulo!")
}