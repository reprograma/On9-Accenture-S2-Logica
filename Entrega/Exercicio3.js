var pesoPeixes = prompt (" Oi João, vamos analisar se você pagará multa ou não. Digite a quantidade (em quilos) de peixe que você pescou hoje.")
var excesso = Number(pesoPeixes) - 50
var multa = Number(excesso) * 4
if ( Number(pesoPeixes) <= 50 ) {
                console.log ("Você não pagará multa pois não excedeu o limite de peso")
} else {
console.log (" João, você excedeu " + excesso + " quilos." + " Sua multa será de : " + multa + " reais.")}