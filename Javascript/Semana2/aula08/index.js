const prompt = require('prompt-sync')();

console.log("-=-=-=-=Comando de decisão Aninhados-=-=-=-=")

x = parseFloat(prompt("Digite o 1º valor: "));
y = parseFloat(prompt("Digite o 2º valor: "));
z = parseFloat(prompt("Digite o 3º valor: "));

if ((x + y > z) && (x + z > y) && (y + z > x)) {
    if ((x == y) && (y == z)) {
        console.log("Triangulo Equilátero!");
    } else if ((x == y) || (y == z) || (x == z)) {
        console.log("Triangulo Isósceles!");
    } else {
        console.log("Traiangulo Escaleno!");
    }
} else {
    console.log("Os lados não formam um trinagulo!");
}

console.log("-=-=-=-=-=-=-=-=")

var nome = prompt("Digite seu nome: ");
var salario = parseFloat(prompt("Digite seu salario: "));
var dependentes = parseInt(prompt("Digite quantdade de dependentes: "));
var renda_percapita = salario / (dependentes + 1);

if (renda_percapita >= 500) {
    if (salario <= 1903.98) {
        var ir = salario * 0.05;
    } else if (salario <= 2826.65) {
        var ir = salario * 0.075;
    } else {
        var ir = salario * 0.15;
    }
} else {
    var ir = 0;
}

var salario_liquido = salario - ir;
console.log("Salario liquido:", salario_liquido);


