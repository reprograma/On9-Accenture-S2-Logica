var salario = Number(prompt("Digite o valor do salário: "));
var percentualAumento = Number(prompt("Digite o valor de aumento: "));
var valorAumento = salario * (percentualAumento / 100);
var novoSalario = (salario + valorAumento).toFixed(2);

console.log(" Parabéns, seu novo salário é: " + novoSalario);
console.log(
  "Com " +
    percentualAumento +
    "%" +
    " você terá R$" +
    valorAumento +
    " a mais por mês :D"
);
