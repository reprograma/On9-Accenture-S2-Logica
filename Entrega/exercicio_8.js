
'use strict';

function anoBissexto() {
    let ano = parseInt(prompt("Por favor, digite um ano: "));

    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        console.log(`O ano de ${ano} é bissexto.`);
    }
    else {
        console.log(`O ano de ${ano} não é bissexto.`);
    }
}

anoBissexto();