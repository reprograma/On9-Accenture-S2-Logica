let kmPercorridos = Number(prompt("Quantos km foram percorridos?"));
let diasAlugados = Number(prompt("Por quantos dias o carro foi alugado?"));
let valorAPagar = ((60 * diasAlugados) + (0.15 * kmPercorridos)).toFixed(2);
console.log("O valor a pagar é de R$" + valorAPagar + ",00 reais")