// 3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário
//de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido
//pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa
//de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a
//variável peso (peso de peixes) e verifique se há excesso. Se houver, gravar na
//variável excesso e na variável multa o valor da multa que João deverá pagar. Caso
//contrário mostrar tais variáveis com o conteúdo ZERO.

let peso = prompt("Qual o peso do peixe?")
let excesso = 0
let multa = 0
if(peso <= 50){
    console.log("Peso não foi excedido, logo excesso = 0 e multa = 0")
}
else {
    excesso = peso - 50
    multa = 4* excesso

    console.log("Peso foi excedido, logo excesso = " +excesso + " multa = " +multa)
}