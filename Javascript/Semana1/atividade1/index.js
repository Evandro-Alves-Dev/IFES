const prompt = require("prompt-sync")();

// Leia os três números
var n1 = parseFloat(prompt("Digite o 1º numero: "));
var n2 = parseFloat(prompt("Digite o 2º numero: "));
var n3 = parseFloat(prompt("Digite o 3º numero: "));

// Calcule a soma e a média
var soma = n1 + n2 + n3;
var media = soma / 3;

// Mostre na tela o valor da soma e média
console.log("A soma é:", soma);
console.log("A média é:", media);