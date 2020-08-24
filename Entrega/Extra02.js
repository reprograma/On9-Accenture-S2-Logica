var ano = Number(prompt("Digite um ano e te diremos se ele é ou não bissexto:"))
if (ano % 100 == 0 && ano % 400 == 0){
    console.log("Sim, esse ano é bissexto, pois é divisível por 100 e por 400 simultaneamente!")
} else if(ano % 100 == 0 && ano % 400 != 0){
    console.log("Esse ano não é bissexto, pois é divisível por 100, porém não por 400!")
} else if (ano % 4 == 0 && ano % 100 != 0){
    console.log("Esse ano é bissexto, pois é divisível por 4 e não é divisível por 100, nem por 400")
}