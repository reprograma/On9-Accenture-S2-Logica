let kmPecorridos = Number(prompt("Você pecorreu quantos kilometros?"));
let diaAlugados = Number(prompt("Você alugou o carro por quantos dias?"));

let valorPagamento = ((kmPecorridos * 0.15) + (diaAlugados * 60));
console.log ("Preço a pagar R$", valorPagamento );