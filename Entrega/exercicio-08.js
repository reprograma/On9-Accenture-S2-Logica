var ano = Number(prompt("Ano:"));

if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0 ){
    console.log( ano + " é ano Bissexto!")
}
else {
    console.log( ano + "não é Bissexto!")
} 