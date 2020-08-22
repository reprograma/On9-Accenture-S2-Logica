let qPeixes
let excesso 
let multa

do{
    qPeixes = parseFloat(prompt("Digite o peso do peixe em quilos (maior que 0)"))
}while(qPeixes <0)

if(qPeixes > 50){
    excesso = qPeixes - 50
    multa = excesso * 4
}else{
    excesso = 0
    multa = 0
}

console.log("Peso: " + qPeixes.toFixed(2) + "kg")
console.log("Excesso: " + excesso.toFixed(2) + "kg")
console.log("Multa: R$" + multa.toFixed(2))