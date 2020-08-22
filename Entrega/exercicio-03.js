var peso = Number(prompt("Peso: "));
var excesso = peso - 50;
var multa = 4 * excesso;

if (peso > 50) {
    console.log(`O excesso foi de: ${excesso}kg. A multa será de: R$${multa}`);
}else {
    console.log("João deverá pagar uma multa de R$ ZERO");
} 
