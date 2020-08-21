let nota1 = Number(prompt('Qual é a Primeira Nota?'));
let nota2 = Number(prompt('Qual é a Segunda Nota?'));
let nota3 = Number(prompt('Qual é a Terceira Nota?'));
let nota4 = Number(prompt('Qual é a Quarta Nota?'));
let nota5 = Number(prompt('Qual é a Quinta Nota?'));

let media = ((nota1+nota2+nota3+nota4+nota5)/5);

if(media >= 5 && media < 7){
    console.log('Infelizmente, você irá para recuperação. Suas notas deixaram a desejar');
} else if(media > 7){
    console.log('Você foi aprovada! Parabéns!')
} else {
    console.log('Você não tem mais chances e foi REPROVADA!')
}
