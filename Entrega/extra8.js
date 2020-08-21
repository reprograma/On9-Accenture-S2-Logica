let ano = Number(prompt("Me diga um ano: ")); 

if ((ano % 400 == 0) || (ano % 4 == 0) && (ano % 100 != 0)) {
    console.log(ano + " é bissexto");
} else {
    console.log(ano + " não é bissexto.");
};