//********************** Exercício 3 **********************
let peso = Number(prompt("Digite o peso da pesca de hoje: "));

if (peso > 50) {
  let excesso = peso - 50;
  let multa = (excesso * 4).toFixed(2);
  alert("Pagar multa de R$ " + multa);
} else {
  let excesso = 0;
  let multa = 0;
  alert("Excesso = " + excesso + " e Multa = " + multa);
}
