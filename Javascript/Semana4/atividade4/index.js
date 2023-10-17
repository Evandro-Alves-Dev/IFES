const prompt = require('prompt-sync')();

var alturas = [];

// Implementar a entrada de dados
for (i = 0; i < 10; i++) {
    var altura = parseFloat(prompt("Digite a altura: "));
    alturas.push(altura);
}

// Implementar o processamento de dados
// Fazer for dentro de for
for (i = 0; i < 10; i++) {
    var contador = 0;
    for (j = 0; j < 10; j++) {
        if (alturas[i] > alturas[j]) {
            contador++;
        }
    }
    // Implementar a saída de dados
    console.log("Aluno " + (i + 1) + ": maior que " + contador + " aluno(s)");
}
