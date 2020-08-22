var notaUm = Number(prompt("Nota 1: "));
var notaDois = Number(prompt("Nota 2: "));
var notaTres = Number(prompt("Nota 3: "));
var notaQuatro = Number(prompt("Nota 4: "));
var notaCinco = Number(prompt("Nota 5: "));
var media = (notaUm + notaDois + notaTres + notaQuatro + notaCinco) / 5;

if (media >= 7) {
    console.log("Aprovada")
}else if (media >= 5 && media < 7){
    console.log("Recuperação")
} else {
    console.log("Reprovada")
}

