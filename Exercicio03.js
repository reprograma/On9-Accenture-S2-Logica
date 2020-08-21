let pesoPeixe = prompt("digite o peso do peixe em KG")
if ( pesoPeixe <= 50 ){
    pesoExcedente = 0
    multa = 0 
 console.log("Peso do peixe dentro da norma " + pesoExcedente + " kg a mais e multa R$ " + multa)
}
if(pesoPeixe > 50){
    pesoExcedente = Number(pesoPeixe) - 50
    multa = pesoExcedente * 4
console.log("kg a mais: " + pesoExcedente + " valor multa:R$ " + multa)
}