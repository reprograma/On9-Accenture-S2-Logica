function ehValido(lado1, lado2, lado3) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return false
    }
    return true
}

function calculaTipoDeTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        return "triangulo equilatero"
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        return "triangulo escaleno"
    }
    return "triangulo isoceles"
}

const lado1 = Number(prompt("informe o primeiro lado"))
const lado2 = Number(prompt("informe o segundo lado"))
const lado3 = Number(prompt("informe terceiro lado"))

if (ehValido(lado1, lado2, lado3)) {
    calculaTipoDeTriangulo(lado1, lado2, lado3)
}
else {
    console.log("lados inválidos")
}
