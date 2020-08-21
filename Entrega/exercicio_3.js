var fishWeight = Number(prompt("Digite o peso de peixes"))

var excess = fishWeight - 50

var penalty = excess * 4;

if (fishWeight <=50) {
    console.log ("Excesso: 0, Multa: R$ 0,00")
}
else if (fishWeight >=51){
    console.log( "Você ultrapassou a pesagem. Sua multa será de R$: " + penalty. toFixed(2))
} 
