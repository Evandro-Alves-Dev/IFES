const prompt = require('prompt-sync')();

var n = 0;
var soma = 0;
var perfeitos = 0

while (perfeitos < 3) {
    n++;
    soma = 0;
    for (let j = 1; j <= n - 1; j++) {
        if (n % j == 0) {
            soma += j;
        }
    }
    if(soma == n) {
        console.log("Numero perfeito: " + n);
        perfeitos++;
    }
}


