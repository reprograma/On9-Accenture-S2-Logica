var productPrice = Number(prompt("Qual o preço da mercadoria?"));
var discount = Number(prompt("De quanto será o desconto?"));

var discountValue = productPrice * (discount / 100);
var newProductPrice = productPrice - discountValue;

console.log("Valor do desconto: " + discountValue + "%");
console.log("Preço a pagar: R$" + newProductPrice);
