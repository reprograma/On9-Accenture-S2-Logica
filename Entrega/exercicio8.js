/** Exercício 8 - Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não.
 * 
 */
let ano = Number(prompt("Digite um ano: "))

if(ano % 4 ===0){
    console.log("O ano " + ano + " é um ano bissexto!")

} else {
    console.log("O ano digitado não é um ano bissexto.")
}