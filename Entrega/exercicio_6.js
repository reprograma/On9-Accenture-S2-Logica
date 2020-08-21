'use strict';

function calculoDeMedia() {
    let nota1 = parseFloat(prompt("Por favor, digite a sua primeira nota: "));
    let nota2 = parseFloat(prompt("Por favor, digite a sua segunda nota: "));
    let nota3 = parseFloat(prompt("Por favor, digite a sua terceira nota: "));
    let nota4 = parseFloat(prompt("Por favor, digite a sua quarta nota: "));
    let nota5 = parseFloat(prompt("Por favor, digite a sua quinta nota: "));

    let totalNotas = nota1 + nota2 + nota3 + nota4 + nota5
    let media = totalNotas / 5

    if (media < 5) {
        let reprovada = `Sua média é ${media} e você foi reprovada!`;
        console.log(reprovada);
    } else if (media >= 5 && media < 7) {
        let recuperacao = `Você Sua média é ${media} e você está em recuperação. Estude mais!`;
        console.log(recuperacao);
    } else if (media >= 7) {
        let aprovada = `Sua média é ${media} e você foi aprovada. Parabéns!`;
        console.log(aprovada);
    }
}

calculoDeMedia();