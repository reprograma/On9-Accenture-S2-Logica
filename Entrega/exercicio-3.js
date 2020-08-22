//3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
//Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do 
//estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
//João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. 
//Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. 
//Caso contrário mostrar tais variáveis com o conteúdo ZERO.

let pesoDoPeixe = prompt("Informe peso pescado em kg")
let excesso = Number(pesoDoPeixe) - 50
let multa = excesso *4

 if (multa < 0) {
  multa = 0 

 }

   console.log("valor da multa " + multa)

