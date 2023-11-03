const prompt = require('prompt-sync')();

var lista_salario_liquido = [];
var total_salarios_lista = 0;
var media_salario = 0;
var qtd_salarios_abaixo_media = 0;

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

    var ir = calcula_ir(salario, renda_percapita);

    var salario_liquido = salario - ir;
    console.log("Salario liquido:", salario_liquido, "\n");

    lista_salario_liquido.push(salario_liquido);
    total_salarios_lista = total_salarios_lista + salario_liquido;
}

media_salario = total_salarios_lista / 5;

qtd_salarios_abaixo_media = calcular_salarios_abaixo_media(lista_salario_liquido, media_salario);

console.log("Media dos salarios digitados:", media_salario);
console.log("Quantidade de pessoas com salario abaixo da média: ", qtd_salarios_abaixo_media);

function calcula_ir(salario, renda_percapita) {
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
    return ir;
}

function calcular_salarios_abaixo_media(lista_salario_liquido, media_salario) {
    var contador = 0;
    for (i = 0; i <= 4; i++) {
        if (lista_salario_liquido[i] < media_salario) {
            contador++;
        }
    }
    return contador;
}