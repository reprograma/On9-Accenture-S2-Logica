let fishWeight = prompt("Digite o peso (em Kg) do peixe:");
fishWeight = fishWeight.replace(/,/g, '.');
let result = "";

if (fishWeight > 50) {
    let excessWeight = Number(fishWeight - 50);
    let fineAmount = Number(excessWeight * 4);
    result = ("O peso excedente foi de: " + excessWeight.toFixed(2) + "Kg. O valor da multa será R$" + fineAmount.toFixed(2) + " reais!");
}

if (fishWeight <= 50) {
    let excessWeight = Number(0);
    let fineAmount = Number(0);
    result = ("O peso excedente foi de: " + excessWeight + "Kg. O valor da multa será R$" + fineAmount + " reais!");
}

console.log = (result);