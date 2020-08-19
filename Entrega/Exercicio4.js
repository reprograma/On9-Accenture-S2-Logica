let kmPercorridos = prompt("Qual quantidade de km percorridos pelo carro alugado")
let diasAlugados = prompt("Qual a quantidade de dias alugados?")
let valorDiaCarro = 60
let valorKmRodado = 0.15


let kmPercorridos1 = Number(kmPercorridos.replace(/,/,'.'))
let preçoPagar =  (diasAlugados*valorDiaCarro)+(kmPercorridos1*valorKmRodado)
    
    alert("Baseado nos dias alugados e km percorridos, o custo total é: R$" + (preçoPagar.toFixed(2)))
    console.log("Baseado nos dias alugados e km percorridos, o custo total é: R$" + (preçoPagar.toFixed(2)))

