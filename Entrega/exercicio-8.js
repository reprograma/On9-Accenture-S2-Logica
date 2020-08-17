let anoEscolhido = Number(prompt("Digite um ano"));
if ((anoEscolhido% 4 ==0) && (anoEscolhido% 100 != 0) || (anoEscolhido% 400 == 0)) {
    console.log(anoEscolhido + " É UM ANO BISSEXTO!")
} else {
    console.log(anoEscolhido + " NÃO É UM ANO BISSEXTO!")
}