var lado1 = 0;
var lado2 = 0
var lado3 = 0;

while(lado1 > 0){
    lado1 = Number(prompt("Digite o lado 1 do triângulo:"));
    console.log("A primeira nota é:" + lado1);
}
while(lado2 > 0){
    lado2 = Number(prompt("Digite o lado 2 do triângulo:"));
    console.log("A primeira nota é:" + lado2);
}
while(lado3 > 0){
    lado3 = Number(prompt("Digite o lado 3 do triângulo:"));
    console.log("A primeira nota é:" + lado3);
}
if(lado1 == lado2 == lado3){
    console.log("O triângulo é equilátero!");
}
else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("O triângulo é isóceles!");
}
else{
    console.log("O triângulo é escaleno!");
}