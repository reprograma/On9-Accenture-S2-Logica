let ano = prompt("Digite o ano:")
var bissexto = new Boolean (false)

if(ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0) {

    bissexto = true
    console.log("O ano é bissexto")

}

else {
    bissexto = false 
    console.log("O ano não é bissexto")
}
