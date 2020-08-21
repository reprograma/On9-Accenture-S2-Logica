'use strict';

function pescaria() {

    let peso = parseFloat(prompt("Pescou quantos quilos ? : "));
    const limite = 50;
    let excesso = peso - limite;
    let multa = excesso * 4;

    if (peso <= 50) {
        const zerado = parseFloat(0);
        console.log(`O peso excedente é igual a ${zerado}kg e a multa é R$${zerado.toFixed(2)}.`);
    } else {
        console.log(`Pelo peso excedente de ${excesso}Kg há uma multa a pagar no valor de R$${multa.toFixed(2)}.`);
    }
}

pescaria();