const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));
const nota4 = Number(prompt("Digite a quarta nota:"));
const nota5 = Number(prompt("Digite a quinta nota:"));

const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
console.log(media);
if (media > 7) {
  console.log("Aprovada!");
} else if (media < 7 && media >= 5) {
  console.log("Em recuperação");
} else {
  console.log("Reprovada");
}
