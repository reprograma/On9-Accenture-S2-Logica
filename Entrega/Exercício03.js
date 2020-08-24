var pesoDePeixe = parseFloat(prompt("Digite o peso, em kg, de peixe adquirido:"))
if (pesoDePeixe > 50) {
    var excesso = pesoDePeixe - 50
    var multa = excesso*4
      console.log("Ops, verificamos que há um excesso de peso em relação ao permitido pelo regulamento. O excesso é de " + excesso + " e o valor da multa é de " + multa + " reais.")
}else {
    console.log("Tudo certo! não há excesso em peso em relação ao permitido pelo regulamento!")
}