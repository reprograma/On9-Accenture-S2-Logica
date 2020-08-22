let evaluationResult1 = Number(prompt("Digite o resultado da sua primeira avaliação: ").replace(/,/g, '.'));
let evaluationResult2 = Number(prompt("Digite o resultado da sua segunda avaliação: ").replace(/,/g, '.'));
let evaluationResult3 = Number(prompt("Digite o resultado da sua terceira avaliação: ").replace(/,/g, '.'));
let evaluationResult4 = Number(prompt("Digite o resultado da sua quarta avaliação: ").replace(/,/g, '.'));
let evaluationResult5 = Number(prompt("Digite o resultado da sua quinta avaliação: ").replace(/,/g, '.'));

let sumOfResults = evaluationResult1 + evaluationResult2 + evaluationResult3 + evaluationResult4 + evaluationResult5;
let weightedAverageOfResults = Number(sumOfResults/5);

let result = "";

if (weightedAverageOfResults >= 7 && weightedAverageOfResults <= 10) {
    result = ("Parabéns! Você foi aprovado(a). Sua média foi: " + weightedAverageOfResults.toFixed(2));
} else if (weightedAverageOfResults >= 5 && weightedAverageOfResults < 7) {
    result = ("Você está em recuperação! Sua média foi: " + weightedAverageOfResults.toFixed(2));
} else if (weightedAverageOfResults < 5) {
    result = ("Infelizmente você foi reprovado(a). Sua média foi: " + weightedAverageOfResults.toFixed(2))
} else {
    result = "Notas inválidas! Os resultados precisam estar entre 0 a 10."
}

console.log(result);
