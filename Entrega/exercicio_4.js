 let kmTraveled = Number.parseInt(prompt("Quantos km você percorreu?"))
 
 let rentedDays = Number(prompt("Há quantos dias o carro está alugado?"))

 let priceDays = 60

 let priceKm = 0.15

 let priceTotalKM = kmTraveled * priceKm
 
 let pricetotalDays = rentedDays * priceDays

 let totalPaid = priceTotalKM +  pricetotalDays

 console.log ("O total a pagar é: R$ " + totalPaid. toFixed(2))

