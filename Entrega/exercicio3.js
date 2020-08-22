
//exercicio 3

let pesoPeixe = Number(prompt("escreva, em kg, quanto você pescou hoje."));
   
if(pesoPeixe <=50) {        
        multa=0
        excessoDePeso=0
            console.log("peso da pesca dentro das normas. " + excessoDePeso + "kg e multa de R$" + multa + ".")
    }

if(pesoPeixe >50) {
        excessoDePeso = (pesoPeixe)-50  
        multa = excessoDePeso*4
            console.log("peso da pesca excedente. " + excessoDePeso + "kg a mais do permitido. multa de R$" + multa + ".")

}


