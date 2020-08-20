// 3 - João, Pescador, comprou um microcomputador para controlar o rendimento diário
//de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido
//pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa
//de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a
//variável peso (peso de peixes) e verifique se há excesso. Se houver, gravar na
//variável excesso e na variável multa o valor da multa que João deverá pagar. Caso
//contrário mostrar tais variáveis com o conteúdo ZERO.

let pesoPeixe = prompt("Digite o peso do peixe em Kg")

if ( pesoPeixe <= 50 ){
    pesoExcedente = 0
    multa = 0 
 
console.log("Peso do peixe dentro da norma " + pesoExcedente + " kg a mais e multa R$ " + multa)
}

if(pesoPeixe > 50){
    pesoExcedente = Number(pesoPeixe) - 50
    multa = pesoExcedente * 4
console.log("kg a mais: " + pesoExcedente + " valor multa:R$ " + multa)
}