//3 - João, Pescador, comprou um microcomputador para controlar o 
//rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o 
//estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma 
//multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável 
//peso (peso de peixes) e verifique se há excesso. Se houver, gravar na variável excesso e na variável 
//multa o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.

excesso=""
let peso = Number(prompt("Digite o peso:"))
if (peso > 50) {
    excesso = (peso - 50) 
    multa = excesso * 4
    console.log("O valor em excesso é de " +excesso+ " e o total da multa é " + multa)
}else 
console.log ("O peso do peixe é " + peso + " e não há multas.")