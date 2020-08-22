var kmPercorridos = prompt(" Olá, vamos descobrir o preço que você deverá pagar durante o uso do carro? Primeiro digite a quantidade ( em KM ) que foram percorridos.")
var diasUso =  prompt(" Agora digite a quantiade de dias que você usou o carro. " )
var precoFinal = ( (Number(kmPercorridos) * 0.15 ) + (Number(diasUso) * 60) )
alert ( " O preço que você irá pagar é de : " + precoFinal + " reais. ")