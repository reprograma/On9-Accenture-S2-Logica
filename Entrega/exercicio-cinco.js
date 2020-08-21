let lado1 = Number(prompt('Qual o tamanho em centímetros do Lado 1 do triângulo?'));
let lado2 = Number(prompt('Qual o tamanho em centímetros do Lado 2 do triângulo?'));
let lado3 = Number(prompt('Qual o tamanho em centímetros do Lado 3 do triângulo?'));

let  todosLadosPositivos = (lado1 > 0 && lado2 > 0 && lado3 > 0) ;
let trianguloValido = ((lado1+lado2)>lado3 && (lado2+lado3)>lado1 && (lado1+lado3)>lado2);

if( todosLadosPositivos && trianguloValido){

    if (lado1 === lado2 && lado2 === lado3){
        console.log('Seu triângulo é do tipo equilátero');
    } else if (lado1 === lado2 || lado1 === lado3){
        console.log('Seu triângulo é do tipo isósceles')
    } else {
        console.log('Seu triângulo é do tipo escaleno')
    }

} else {
    if(!todosLadosPositivos){
    console.log('Você digitou um valor negativo como lado de um triângulo. Atualize a página para refazer');
    } else if (!trianguloValido) {
    console.log('O seu triângulo não é um triângulo válido de acordo com as leis da matemática')
    }
}