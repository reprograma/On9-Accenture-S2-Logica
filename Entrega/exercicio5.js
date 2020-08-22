
let ladoA = Number(prompt("Digite um valor do lado A do triângulo"))
let ladoB = Number(prompt("Digite o valor do lado B do triângulo"))
let ladoC = Number(prompt("Digite o valor do lado C do triângulo"))


if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    alert ("Erro, esse valor não é aceito, por favor digite novamente");
     }

     if ((ladoA<ladoB+ladoC) && (ladoB<ladoA+ladoC) &&(ladoC<ladoA+ladoB)){
        if ((ladoA==ladoB) && (ladoB==ladoC)) 
    console.log ("Esse é um triângulo equilátero")
        else if ((ladoA==ladoB || ladoA==ladoC || ladoC==ladoB)) 
    console.log ("Esse é um triângulo isóceles")
        else if ((ladoA!=ladoB) && (ladoA!=ladoC))
     console.log ("Esse é um triângulo escaleno") 
    }
 

else {
console.log ("Isso não é um triângulo") 
}







