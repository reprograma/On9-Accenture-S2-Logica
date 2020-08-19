let nota1 = Number(prompt("Qual a primeira nota?"))
let nota2 = Number(prompt("Qual a segunda nota?"))
let nota3 = Number(prompt("Qual a terceira nota?"))
let nota4 = Number(prompt("Qual a quarta nota?"))
let nota5 = Number(prompt("Qual a quinta nota?"))
let media = Number((nota1+nota2+nota3+nota4+nota5)/5).toFixed(2)

if (media>=7){
    console.log("MÉDIA: "+ media + " // APROVADA")
}else if (media<5){
    console.log("MÉDIA: "+ media + " // REPROVADA")
}else{
    console.log("MÉDIA: "+ media + " // RECUPERAÇÃO")
}