var notaAluno = ("nota1, nota2, nota3, nota4, nota5, média: real");

var nota1 = Number(prompt("Digite a nota 1:"));
console.log("A primeira nota é:" + nota1);

var nota2 = Number(prompt("Digite a nota 2:"));
console.log("A segunda nota é:" + nota2);

var nota3 = Number(prompt("Digite a nota 3:"));
console.log("A segunda nota é:" + nota3);

var nota4 = Number(prompt("Digite a nota 4:"));
console.log("A segunda nota é:" + nota4);

var nota5 = Number(prompt("Digite a nota 5:"));
console.log("A segunda nota é:" + nota5);

var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5; 

if(media >= 7){
    console.log("Aprovado");
} 
else if(media >= 5){
    console.log("Recuperação");
}
else{
    console.log("Reprovado");
}
console.log("O resultado é:" + media);