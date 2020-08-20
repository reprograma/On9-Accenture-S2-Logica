//Faça um Programa que peça os três lados de um triângulo. Nenhum valor digitado pode ser 0 (zero) ou negativo. 
    //Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

    let a = Number(prompt("Qual o valor primeiro lado do triângulo?"))
            if(a <= 0){
                a = Number(prompt("O valor digitado não pode ser 0 (zero) ou negativo. Digite novamente o valor do primeiro lado do triângulo: "))
            } 

    let b = Number(prompt("Qual o valor segundo lado do triângulo?"))
            if(b <= 0){
                b = Number(prompt("O valor digitado não pode ser 0 (zero) ou negativo. Digite novamente o valor do segundo lado do triângulo: "))
            } 
    
    let c = Number(prompt("Qual o valor terceiro lado do triângulo?"))
            if(c <= 0){
                c = Number(prompt("O valor digitado não pode ser 0 (zero) ou negativo. Digite novamente o valor do terceiro lado do triângulo: "))
            }
    
    let tipoTriangulo; 
     
            if (((Math.abs(b-c) < a) && (a < b+c)) || ((Math.abs(a-c) < b) && (b < a+c)) || ((Math.abs(a-b) < c) && (c < a+b))) {
                if (a == b == c) {
                    tipoTriangulo = "Equilátero"
                    alert("Os lados formam um triângulo equilátero")
                    console.log("Os lados formam um triângulo equilátero")
                }else if (a == b || a == c || b == c){ 
                    tipoTriangulo = "Isóceles";
                    alert("Os lados formam um triângulo isósceles")
                    console.log("Os lados formam um triângulo isósceles")
                }else {
                    tipoTriangulo = "Escaleno";
                    alert("Os lados formam um triângulo escaleno")
                    console.log("Os lados formam um triângulo escaleno")
                }
            }else {
                alert("Os lados não formam um triângulo")
                console.log("Os lados não formam um triângulo");
            }
