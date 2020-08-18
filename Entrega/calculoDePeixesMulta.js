function calculaMulta(peso) {
    const pesoMaximo = 50 
    const excesso = peso - pesoMaximo
    const taxa = 4
    let multa = 0
    if (excesso > 0) {
        multa = excesso * taxa
    }
    return multa
}
const peso = Number(prompt("informe o peso"))
calculaMulta(peso)