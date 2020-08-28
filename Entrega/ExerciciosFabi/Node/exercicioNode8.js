//Extra
//8 - Ano bissexto: receba um ano pelo prompt e imprima no console se ele é bissexto ou não. 


const ano = 1900;

if( ano % 400 === 0){
    console.log(ano + " Este é um ano bissexto")

}else if ( ano % 4 === 0 && ano % 100 !== 0 ){ 
    console.log(ano + " Este é um ano bissexto")
} else {
    console.log("Este não é um ano bissexto")
}