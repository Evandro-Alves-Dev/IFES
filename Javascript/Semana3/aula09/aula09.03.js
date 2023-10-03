const prompt = require('prompt-sync')();

var continuar = true;
var soma_total = 0;

while (continuar) {
    var n1 = parseFloat(prompt("Digite o 1º numero: "));
    var n2 = parseFloat(prompt("Digite o 2º numero: "));
    soma = n1 + n2
    soma_total += soma;

    var resposta = prompt("Deseja cotinuar a somar os numeros? ");
    if (resposta != "s") {
        console.log("Soma dos numeros digitados: ", soma_total);
        continuar = false;
    }
}