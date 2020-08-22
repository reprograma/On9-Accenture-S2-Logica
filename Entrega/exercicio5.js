
//exercicio 5

let primeiroLado = Number(prompt("indique o tamanho do primeiro lado do triângulo"));
let segundoLado = Number(prompt("indique o tamanho do segundo lado do triângulo"));
let terceiroLado = Number(prompt("indique o tamanho do terceiro lado do triângulo"));
  

if(primeiroLado <=0) {  
    alert("favor, não digite valores negativos ou 0.")
}

if(segundoLado <=0) {
    alert("favor, não digite valores negativos ou 0.")
}

if(terceiroLado <=0) { 
    alert("favor, não digite valores negativos ou 0.")
}

else if(primeiroLado === segundoLado && segundoLado === terceiroLado) {
    console.log("triângulo equilátero.")
}

else if(primeiroLado != segundoLado && segundoLado != terceiroLado && primeiroLado != terceiroLado) {
    console.log("triângulo escaleno")
}

else{
    console.log("triângulo isósceles")
}



