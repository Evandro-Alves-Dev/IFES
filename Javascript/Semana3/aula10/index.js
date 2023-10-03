const prompt = require('prompt-sync')();

for (i = 1; i <= 5; i++) {
    console.log("Pessoa ", i);
    var nome = prompt("Digite seu nome: ");
    var salario = parseFloat(prompt("Digite seu salario: "));
    var dependentes = parseInt(prompt("Digite quantdade de dependentes: "));

    for (j = 1; j <= dependentes; j++) {
        var salario_dependente = parseFloat(prompt("Digite salario dependente: "));
        salario = salario + salario_dependente;
    }

    var renda_percapita = salario / (dependentes + 1);

    if (renda_percapita >= 500) {
        if (salario > 0 && salario <= 1903.98) {
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
    console.log("Salario liquido:", salario_liquido, "\n");
}