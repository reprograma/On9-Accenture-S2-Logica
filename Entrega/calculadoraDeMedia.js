function calcularMedia(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5
}
function situacaoDoAluno(media) {
    const aprovacao = 7
    const recuperacao = 5
    if (media >= aprovacao) {
        return "parabéns você foi aprovado"
    }
    if (media >= recuperacao) {
        return "estude um pouco mais,você está de recuperação!"
    }

    return "infelizmente você foi reprovado"
}
const nota1 = Number(prompt("informe a primeira nota"))
const nota2 = Number(prompt("informe a segunda nota"))
const nota3 = Number(prompt("informe a terceira nota"))
const nota4 = Number(prompt("informe a quarta nota"))
const nota5 = Number(prompt("informe a quinta nota"))
const media = calcularMedia(nota1, nota2, nota3, nota4, nota5)
const situacao = situacaoDoAluno(media)
console.log(situacao)