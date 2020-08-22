/** Exercício 3 -  João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
 * Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos)
 * deve pagar uma multa de R$ 4,00 por quilo excedente. 
 * João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. 
 * Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. 
 * Caso contrário mostrar tais variáveis com o conteúdo ZERO.
 * 
 */
let peso = Number(prompt("Digite o peso (kg) de peixes"))
let multa = 4
let excesso
let valorAPagar

if (peso <= 50){
    multa = 0
    excesso = 0
   // valorAPagar = peso
   // console.log("O valor a pagar é R$" + peso)
   console.log("O Peso de peixes não ultrapassou o valor estabelecido. Ou seja, não terá que pagar multas.")

} else if (peso > 50) {
    excesso = peso - 50
    multa = 4 * excesso
    valorAPagar = peso + multa
    console.log("O peso teve excesso de "+ excesso +"  quilos e valor da multa é de: R$" + multa)
    //console.log("O valor a pagar é: R$" + valorAPagar)
}