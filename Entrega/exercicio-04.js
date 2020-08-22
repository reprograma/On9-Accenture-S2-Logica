var km = Number(window.prompt("Quantos km:"));
var dias = Number(window.prompt("Quantos dias:"));
var kmValor = 0.15 * km;
var diasValor = 60 * dias;
var valorTotal = kmValor + diasValor;

console.log("Usuário deve pagar R$ " + valorTotal)
