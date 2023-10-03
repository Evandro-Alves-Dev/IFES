const prompt = require('prompt-sync')();

var n1 = parseInt(prompt("Digite um numero: "));
var divisores = qtd = 0;

for (let i = 1; i <= n1; i++) {
    divisores = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            divisores++;
        }
    }
    if (divisores == 2 && i != 2) {
        qtd++;
    }
}
console.log("A quantidade de primos: " + qtd);