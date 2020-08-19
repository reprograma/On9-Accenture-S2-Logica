//Faça um Programa que peça os três lados de um triângulo. Nenhum valor digitado pode ser 0 (zero) ou negativo. 
    //Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

    let lado1 = Number(prompt("Qual o valor primeiro lado do triângulo?"))
            if(lado1 <= 0){
                lado1 = Number(prompt("O valor digitado não pode ser 0 (zero) ou negativo. Digite novamente o valor do primeiro lado do triângulo: "))
            } 

    let lado2 = Number(prompt("Qual o valor segundo lado do triângulo?"))
            if(lado2 <= 0){
                lado2 = Number(prompt("O valor digitado não pode ser 0 (zero) ou negativo. Digite novamente o valor do segundo lado do triângulo: "))
            } 
    
    let lado3 = Number(prompt("Qual o valor terceiro lado do triângulo?"))
            if(lado3 <= 0){
                lado3 = Number(prompt("O valor digitado não pode ser 0 (zero) ou negativo. Digite novamente o valor do terceiro lado do triângulo: "))
            }
    
            let cond1 = 0
            let cond2 = 0
            let cond3 = 0
     
            if ((Math.abs(lado2-lado3)) < lado1 && lado1 < (lado2 + lado3)) {
                 let cond1 = 1
            }else {
                 let cond1 = 0
            }
            
            if ((Math.abs(lado1-lado3)) < lado2 && lado2< (lado1 + lado3)){
                let cond2 = 1
            }else {
                 let cond2 = 0
            }
     
            if ((Math.abs(lado1-lado2)) < lado3 && lado3 < (lado1 + lado2)){
                let cond3 = 1
            }else{
                let cond3=0
            }
            
            if(cond1=cond2=cond3=1){
             console.log("Os lados formam um triângulo")
            }else{
             console.log("Os lados não formam um triângulo")
            }

        switch (cond1=cond2=cond3=1){
            case(cond1=cond2=cond3=0):
             console.log("Os lados não formam um triângulo");
             break;

            case (lado1 == lado2 && lado1 == lado3 && lado2 == lado3): 
             console.log("Os lados formam um triângulo equilátero");
             break;
            
            case (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3): 
             console.log("Os lados formam um triângulo escaleno");
             break;

            default:
            console.log("Os lados formam um triângulo isósceles");
     }


            
     //case ((lado1 = lado2 != lado3) || (lado1 = lado3 != lado2) || (lado2 = lado3 != lado1)):
        //console.log("Os lados formam um triângulo isósceles");
       // break;
//(Math.abs(lado2-lado3) < lado1 < (lado2 + lado3)) && (Math.abs(lado1-lado3) < lado2 < (lado1 + lado3)) && (Math.abs(lado1-lado2) < lado3 < (lado1 + lado2))
    
       