const prompt = require('prompt-sync')();

nome = prompt("Digite o nome do cliente: ");
gasto = parseFloat(prompt("Digite o valor da compra R$: "));

if (gasto < 1000) {
    var desconto = gasto * 0.05;
} else if (gasto >= 1000 && gasto <= 5000) {
    var desconto = gasto * 0.10;
} else {
    var desconto = gasto * 0.15;
}

total = gasto - desconto;

console.log("Cliente", nome, "teve o desconto de", desconto, "a compara total foi de R$", total);