// 3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu
//trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de
//pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente.
//João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se
//há excesso. Se houver, gravar na variável excesso e na variável multa o valor da multa que João
// deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.

let fishWeight = Number(prompt('Quantos kilos de peixe você pescou hoje? '));
let excessFish = fishWeight - 50;
let fine = excessFish * 4;

if (fishWeight <= 50) {
  console.log('Não há excesso, você não deverá pagar multas!!');
} else console.log('Você deverá pagar uma multa de ' + fine + ' reais.');
let pesoPeixe = prompt('digite o peso do peixe em KG');
