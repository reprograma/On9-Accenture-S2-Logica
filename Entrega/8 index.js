//não consegui terminalo mas a primeira parter esta funfando !
let ano = Number(prompt("Digite o ano"))

let divisao = (ano % 4)



if( divisao === 0) {
   let divisao2 = (ano % 100)
    if (divisao2 !== 0){
        console.log("Esse ano " + ano + " é bissesto")   
    }
}

//segunda opção
/*if (divisao !== 0) {
    let divisao3 = (ano % 400)
    if (divisao3 === 0) {
        console.log("Esse ano " + ano + " é bissesto")

    } 
}*/
