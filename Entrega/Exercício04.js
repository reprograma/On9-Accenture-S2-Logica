var distânciaPercorrida = parseFloat(prompt("Quantos km foram rodados durante o aluguel do carro?"))
var diasPercorridos = Number(prompt("Por quantos dias o carro foi alugado?"))
var calculo = (diasPercorridos*60) + (0.15*distânciaPercorrida)
console.log("O valor a pagar pelo aluguel é de R$" + calculo)