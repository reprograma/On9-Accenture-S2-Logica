const fishesWeight = Number(
  prompt("Digite a quantidade de peixes que João pescou:")
);
const allowedWeight = 50;
let penalty = 4.0;

let overweight = 0;
let penaltyToPay = 0;

if (fishesWeight > allowedWeight) {
  overweight = fishesWeight - allowedWeight;
  penaltyToPay = overweight * penalty;
}

console.log("O excesso de peso foi de " + overweight + "kg");
console.log("A multa por excesso de peso será de R$" + penaltyToPay.toFixed(2));
