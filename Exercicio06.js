let firstGrade = prompt("digite a primeira nota:")
let secondGrade = prompt("digite a segunda nota:")
let thirdGrade = prompt("digite a terceira nota:")
let fourthGrade = prompt("digite a quarta nota:")
let fifthGrade = prompt("digite a quinta nota:")
resultado = (Number(firstGrade) + Number(secondGrade) + Number(thirdGrade) + Number(fourthGrade) + Number(fifthGrade) ) / 5
if(resultado >7){
    console.log("aprovado(a)")
}
else if(resultado <5){
    console.log("reprovado(a)")
}
else if(resultado =5 <=7 ){
    console.log("recuperação")
}



