var peso = Number(prompt("Peso: "));
var excesso = peso - 50;
var multa = 4 * excesso;

if (peso > 50) {
    console.log("João deverá pagar uma multa de R$" + multa);
}else {
    console.log("João deverá pagar uma multa de R$ ZERO");
} 
