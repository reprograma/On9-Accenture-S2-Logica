let apresentacao = alert ("Esse programa irá identificar que tipo de triângulo você está especificando. Digite o valor de cada lado do triângulo. Obs: Os valores não podem ser 0(zero) ou negativo. Vamos começar?")
let ladoUm = prompt ("Digite o tamanho do lado 1")
let ladoDois = prompt("Digite o tamanho do lado 2")
let ladoTres = prompt("Digite o tamanho do lado 3")

if(Number(ladoUm)=== Number(ladoDois) && Number(ladoDois) === Number(ladoTres)) {
        alert (" O seu triângulo é equilátero pois todos os lados possuem o mesmo tamanho. ")
} else if ( Number(ladoUm) === Number(ladoDois)){ 
        alert(" Seu triângulo possui dois lados iguais, portanto ele é isósceles") 
} else if ( Number(ladoUm) === Number(ladoTres)) {
        alert(" Seu triângulo possui dois lados iguais, portanto ele é isósceles")
} else if (Number(ladoDois) === Number(ladoTres)) {
        alert(" Seu triângulo possui dois lados iguais, portanto ele é isósceles")
   } else {
       alert ("O seu triângulo não possui nenhum lado igual a outro, portanto, é um triângulo escaleno")
   }