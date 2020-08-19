//Enunciado
//3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
//Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo 
//(50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
//João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. 
//Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. 
//Caso contrário mostrar tais variáveis com o conteúdo ZERO.

Opção 1 

let pesoPeixes = prompt("Quantos kilos de peixe tem?")

let multa = Number(pesoPeixes) - 50 

let resultado = ""
if (Number(multa) <= 0){
    resultado = 0
} else if (Number(multa) > 0) {
    resultado = (multa * 4)
}

console.log("João, com esse peso de peixes você pagará de multa R$"+resultado+" reais.")

========================================================================================

Opção 2

let pesoPeixes = prompt("Quantos kilos de peixe tem?")

let multa = Number(pesoPeixes) - 50 

let resultado = ""
if (Number(multa) <= 0){
    resultado = 0
    console.log("João, esse peso de peixes esta dentro do regulamento de pesca do estado de São Paulo, então você não pagará multa")
} else if (Number(multa) > 0) {
    resultado = (multa * 4)
    console.log("João, com esse peso de peixes você pagará de multa R$"+resultado+" reais. Pois, esta maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) sendo R$ 4,00 por quilo excedente.")
}

