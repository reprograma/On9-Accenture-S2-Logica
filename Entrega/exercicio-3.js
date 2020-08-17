let pesoPeixe = Number(prompt("Quantos kgs de peixe pescado hoje?"));
let excessoPeso = (pesoPeixe - 50).toFixed(0);
let multaAPagar = excessoPeso * 4;
if(pesoPeixe <= 50){
    console.log("ZERO")
} else {
    console.log(excessoPeso + "Kg excedidos. Multa a pagar: R$" + multaAPagar + ",00 reais!");
}
