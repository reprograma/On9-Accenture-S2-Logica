
//exercicio 4

let kmPercorridos = Number(prompt("quantos km você percorreu usando o carro alugado?"));

let dias = Number(prompt("e por quantos dias o carro foi alugado?"));

let valorDeKm = kmPercorridos*0.15
let valorDeDias = dias*60

    let valorAPagar = valorDeKm + valorDeDias

        console.log("o preço a pagar é R$" + valorAPagar + ".")

