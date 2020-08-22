var pesoPeixe = Number(prompt("Digite o peso do peixe em KG: "))
if (pesoPeixe <=50) {
var pesoExcedente = 0
var multa = 0
console.log("Peso dentro da norma:" + pesoExcedente + multa)
}

else if (pesoPeixe > 50){
var pesoExcedente = (pesoPeixe) - 50
var multa = pesoExcedente * 4
console.log("Valor da Multa R$:" + multa)
}