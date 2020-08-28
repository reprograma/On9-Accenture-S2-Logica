/* 3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de 
pesca do estado de São Paulo(50 quilos) deve pagar uma multa de R$ 4, 00 por quilo excedente.
João precisa que você faça um programa que leia a variável peso(peso de peixes) e verifique se há excesso.
Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar.
Caso contrário mostrar tais variáveis com o conteúdo ZERO. */

let peso = Number(prompt("Digite o peso do peixe: "));

if (peso > 50) {
    let excessoDePeso = peso - 50;
    let multa = excessoDePeso * 4;
    console.log("Excesso de peso: " + excessoDePeso + " Kg");
    console.log("Multa: R$ " + multa);

} else {
    console.log("Excesso de peso: 0 kg");
    console.log("Multa: R$ 0");
}