let ano = Number(prompt('Insira o ano desejado'));

if (ano % 400 === 0) {
    console.log('Ano bissexto')
} else if (ano % 4 === 0 && ano % 100 !== 0){
    console.log('Ano bissexto');
} else {
    console.log( 'não é um ano bissexto')
}

//Outro método de resolução

let ano = Number(prompt('Insira o ano desejado'));

if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
    console.log( ano + ' é um ano bissexto')
} else {
    console.log( ano + ' não é um ano bissexto')
}