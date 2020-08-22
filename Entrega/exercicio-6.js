let n1
let n2
let n3
let media

do{
    n1 = parseFloat(prompt("Digite a 1ª nota (Entre 0 e 10)"))
}while(n1 > 10 | n1 < 0)

do{
    n2 = parseFloat(prompt("Digite a 2ª nota (Entre 0 e 10)"))
}while(n2 > 10 | n1 < 0)

do{
    n3 = parseFloat(prompt("Digite a 3ª nota (Entre 0 e 10)"))
}while(n3 > 10 | n1 < 0)

media = (n1+n2+n3)/3

console.log(media.toFixed(2))
if(media >= 7){
    console.log("Aprovadx! :)")
}else if(media < 5){
    console.log("Reprovadx :(")
}else{
    console.log("Recuperação :/")
}