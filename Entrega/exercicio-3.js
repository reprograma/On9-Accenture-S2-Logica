//********************** Exercício 3 **********************

/*  João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO. */

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
