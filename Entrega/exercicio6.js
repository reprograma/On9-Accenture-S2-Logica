const nota1 = prompt("Digite a primeira nota do aluno: ");
const nota2 = prompt("Digite a segunda nota do aluno: ");
const nota3 = prompt("Digite a terceira nota do aluno: ");
const nota4 = prompt("Digite a quarta nota do aluno: ");
const nota5 = prompt("Digite a quinta nota do aluno: ");

const soma =
  Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(nota5);
const media = soma / 5;

let situacao = "O aluno com media " + media + "está ";
if (media >= 5 && media < 7) {
  situacao += "em recuperação";
} else if (media > 7) {
  situacao += "aprovado";
} else {
  situacao += "reprovado";
}

console.log(situacao);
