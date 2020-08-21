let dia = Number(prompt("Quantos dias você ficou com o carro?"));
let km = Number(prompt("Quantos Km você rodou com o carro?"));

let pagar = (dia * 60) + (km * 0.15);

alert("Total a pagar: R$" + pagar);