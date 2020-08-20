let ano = Number(prompt("Qual o ano?"))
let teste1 = ano%4
let teste2 = ano%100
let teste3 = ano%400 

if((teste1==0) && (teste3==0)){
    if(teste3==0){    
        alert("O ano "+ ano + " é bissexto")
        console.log("O ano "+ ano + " é bissexto")}
}else if ((teste1==0) && (teste2!==0)){
    alert("O ano "+ ano + " é bissexto")
    console.log("O ano "+ ano + " é bissexto")
}else{
    alert("O ano "+ ano + " não é bissexto")
    console.log("O ano "+ ano + " não é bissexto")
}
