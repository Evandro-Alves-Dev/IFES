const prompt = require('prompt-sync')();

var array = [];
var soma = 0;
var media = 0;

for (i = 1; i <= 8; i++) {
    var n = parseFloat(prompt("Digite o " + i + " numero "));
    array.push(n);
    soma += n;
}

media = soma / 8;

for (i = 0; i <= 7; i++) {
    if(array[i] > media ) {
        console.log("Numeros maiores que a média " + array[i]);
    }
}
console.log("Média " + media);
