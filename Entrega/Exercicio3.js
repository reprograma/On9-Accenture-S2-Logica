let pesoPeixe = prompt("Qual o valor do peso de peixes?")
let excesso = "0"
let multa = "0"

if(pesoPeixe > 50){
    let excesso = (pesoPeixe-limite)
    let multa = excesso*taxaMulta
    alert("O excesso é de: " + excesso + "Kg // " + "Multa: R$ " + multa )
    console.log("O excesso é de: " + excesso + "Kg // " + "Multa: R$ " + multa)
} 

else(pesoPeixe <= 50);{
        alert("O excesso é de: " + excesso + "Kg // "  +"Multa: R$ " + multa )
        console.log("O excesso é de: " + excesso + "Kg // " + "Multa: R$ " + multa)
} 
