/* 3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO. */

let fishWeight = parseFloat(prompt("Qual o peso dos peixes (em kg)?"));

if (fishWeight <= 50) {
    excessWeight = 0;
    ticket = 0;
    console.log("O excedente é " + excessWeight + "kg e a multa é de R$" + ticket);
} 
if (fishWeight > 50) {
    excessWeight = fishWeight - 50;
    ticket = excessWeight * 4;
    console.log("O peso excendente é de " + excessWeight + "kg e você deverá pagar R$" + ticket.toFixed(2) + " de multa.");
}