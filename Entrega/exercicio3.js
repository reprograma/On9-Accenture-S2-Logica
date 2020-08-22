// 3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso 
// de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00
// por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso.
// Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. Caso contrário mostrar tais
// variáveis com o conteúdo ZERO.

let pesoDoPeixe = Number(prompt ("Qual o peso do peixe em kg: "))

let multa = 4
let excedente = 0

if (pesoDoPeixe > 50) {
    excedente = pesoDoPeixe - 50
    multa = excedente * multa
    console.log("Houve excesso de peso de " + excedente + " e será pago multa de R$" + multa)
}
else {
    multa = 0
    excedente = 0
    console.log("Não houve excesso de peso e nem multa")
}