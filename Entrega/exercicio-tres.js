let pesoLimite = 50;
let multaPorQuilo = 4.0;
let pesoDePeixes = Number(prompt('Quantos quilos de pescado você conseguiu hoje?'));
let valorDaMulta = '';
let excesso = '';

if(pesoDePeixes>pesoLimite){
    excesso = pesoDePeixes - pesoLimite;
    valorDaMulta = excesso * multaPorQuilo;

    console.log( 'Atenção! Você ultrapassou o limite de peso em ' +  excesso + ' quilos e terá que pagar uma multa no valor de R$ ' + valorDaMulta);

} else if (pesoDePeixes > 0 && pesoDePeixes <= pesoLimite) {
    excesso = 0;
    valorDaMulta = 0;

    console.log(excesso);
    console.log(valorDaMulta);

} else {
    console.log ('Digite um número maior que zero');
}