Posso pegar ate peixe de 50 kg 
50> então add 4 reais para cada kg


let pesoPeixe = Number(prompt("Quantos quilos pesa o peixe?"))
if (pesoPeixe < 51) {
    console.log("ZERO")

} 
if (pesoPeixe > 50) {
    let exPeso = (pesoPeixe - 50)
    let multa = (exPeso * 4)
    console.log("O peso de excesso foi de " + exPeso + "  Kg e o valor da multa é de " + multa + " reais")
}