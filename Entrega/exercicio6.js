let nota1 = Number(prompt("Digite a 1ª nota:"));
let nota2 = Number(prompt("Digite a 2ª nota:"));
let nota3 = Number(prompt("Digite a 3ª nota:"));
let nota4 = Number(prompt("Digite a 4ª nota:"));
let nota5 = Number(prompt("Digite a 5ª nota:"));
let media = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

if (media >= 7) {
    alert("Média: " + media + "\nAluna aprovada!");
} else if (media < 5) {
    alert("Média: " + media + "\nAluna reprovada.");
} else if ((media >= 5) && (media < 7)) {
    alert("Média: " + media + "\nAluna em recuperação.");
};