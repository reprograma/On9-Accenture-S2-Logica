let kmPercorrido = Number(prompt("Quantos foram os KM percorridos?"));
let qtdDias = Number(prompt("Por quantos dias o carro foi alugado?"));

let precoPagar = (qtdDias * 60) + (kmPercorrido * 0.15)

console.log(`O valor total foi de: R$ ${precoPagar}` + `,00`)
