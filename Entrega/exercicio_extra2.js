let ano = Number(prompt("Digite o ano"))

let condicao_1 = ano % 4

let condicao_2 = ano % 100

let condicao_3 =  ano % 400

 
if(condicao_1 === 0 && condicao_2 !== 0 ){
    console.log ("É um ano bissexto!")

}else if(condicao_2 === 0 && condicao_3 === 0){
    console.log("É um ano bissexto!")

}else if(condicao_1 === 0 && condicao_2 === 0 && condicao_3 !==0){
    console.log("Não é um ano bissexto!")
  
}else if(condicao_2 !== 0){
    console.log("Não é um ano bissexto!")
}

