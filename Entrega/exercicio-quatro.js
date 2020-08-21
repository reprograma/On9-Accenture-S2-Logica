let quilometragem = Number(prompt('Quantos quilômetros foram percorridos?'));
let diasDeUso = Number(prompt('Por quantos dias, o carro foi usado?'));
let  diariaDoCarro = 60.00;
let taxaPorKm = 0.15;

let valorDoAluguel = ((diasDeUso*diariaDoCarro)+(quilometragem*taxaPorKm));
console.log( 'Você pagará o total de R$ '+ valorDoAluguel + ' pelo aluguel desse veículo');