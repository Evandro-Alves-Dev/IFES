// Implementar comando de repetição (de 1 até 20)
var quadPar = 0;
var quadImpar = 0;
for (let i = 1; i <= 20; i++) {
    var quadrado = i ** 2;
    console.log(quadrado);

    // Implementar os comandos de decisão para verificar números quadrados pares ou ímpares
    if (quadrado % 2 == 0) {
        quadPar += quadrado;
    } else {
        quadImpar += quadrado;
    }
}

console.log("A soma de quadrados pares: ", quadPar);
console.log("A soma de quadrados ímpares: ", quadImpar);