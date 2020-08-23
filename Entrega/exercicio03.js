let peso = Number(prompt("Digite o peso do peixe"));
let calculo = (peso - 50)
let excesso
let multa

if (peso > 50) {
    excesso = `Excesso ${calculo}`
    multa = `A multa foi de: ${calculo * 4}`
    
} else {
    excesso = `Excesso 0`
    multa = `Multa 0`
}

console.log(excesso)
console.log(multa)