//Enunciado
//3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
//Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo 
//(50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
//João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. 
//Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. 
//Caso contrário mostrar tais variáveis com o conteúdo ZERO.

var pesoPeixes = 50
var excesso = pesoPeixes - 50
var multa = excesso * 4
if( excesso > 0){
    console.log("João vc teve um excesso de peso de "+excesso+"kg e pagará de multa R$"+multa+" reais.")
} else {
    console.log("João vc teve um excesso de peso de 0kg e pagará de multa R$00 reais.")
}