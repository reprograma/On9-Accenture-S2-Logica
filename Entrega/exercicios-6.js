let nota1 = Number(prompt("Insira a primeira nota"));
let nota2 = Number(prompt("Insira a segunda nota"));
let nota3 = Number(prompt("Insira a terceira nota"));
let nota4 = Number(prompt("Insira a quarta nota"));
let nota5 = Number(prompt("Insira a quinta nota"));

let media = (nota1+nota2+nota3+nota4+nota5)/5.toFixed(2);

if(media >= 7){
    console.log(media + " APROVADO");
} else if(media <= 5){
    console.log(media + " REPROVADO")
} else{
    console.log(media + " RECUPERAÇÃO")
}