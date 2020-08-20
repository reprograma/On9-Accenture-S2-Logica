/** Exercício 5 - Faça um Programa que peça os três lados de um triângulo. 
 * Nenhum valor digitado pode ser 0 (zero) ou negativo. 
 * Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
 * 
 */

 let trianguloLado1 = prompt("Digite o valor de um lado do triângulo: ")
 let trianguloLado2 = prompt("Digite o valor do segundo lado do triângulo: ")
 let trianguloLado3 = prompt("Digite o valor do terceiro do triângulo: ")

 if(trianguloLado1 <=0){
  trianguloLado1 = prompt("Não digite 0 ou valor negativo. Tente novamente. Digite o valor de um lado do triângulo: ")
 }
 if(trianguloLado2 <=0){
  trianguloLado2 = prompt("Não digite 0 ou valor negativo. Tente novamente. Digite o valor do segundo lado do triângulo: ")
 }
 if(trianguloLado3 <=0){
  trianguloLado3 = prompt("Não digite 0 ou valor negativo. Tente novamente. Digite o valor do terceiro lado do triângulo: ")
 }
 if (trianguloLado1 == trianguloLado2 && trianguloLado1 == trianguloLado3){
    console.log("Considerando os lados digitados, o seu triângulo é equilátero, pois possui os três lados iguais")

 } else if(trianguloLado1 == trianguloLado2 || trianguloLado1 == trianguloLado3) {
   console.log("Considerando os lados digitados, o seu triângulo é isósceles, pois possui dois lados iguais")
  
 } else if(trianguloLado1 != trianguloLado2 && trianguloLado1 != trianguloLado3 && trianguloLado2 != trianguloLado3){
   console.log("Considerando os lados digitados, o seu triângulo é escaleno, pois os três lados possuem valores diferentes")

 } 