let peso = Number(prompt("Quantos quilos de peixes você tem?"));;
let excesso = 0;
let multa = 0;

if (peso > 50) {
    excesso = peso - 50;
    multa = excesso * 4;
    alert("Você excedeu " + excesso + " quilos" + " e terá que pagar uma multa de R$ " + multa + " reais.");
} else {
    alert("Excesso: " + excesso + " quilos." + " Multa a pagar: R$ " + multa + " reais.")
};