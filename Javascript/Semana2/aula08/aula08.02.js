const prompt = require('prompt-sync')();

n1 = parseFloat(prompt("Digite o 1º angulo: "));
n2 = parseFloat(prompt("Digite o 2º angulo: "));
n3 = parseFloat(prompt("Digite o 3º angulo: "));

if (n1 + n2 + n3 == 180) {
    if ((n1 < 90) && (n2 <90) && (n3 < 90)) {
        console.log("Triangulo Acutangulo!");
    } else if ((n1 == 90) || (n2 == 90) || (n3 == 90)) {
        console.log("Triangulo Retangulo!");
    } else {
        console.log("Traiangulo Obtusangulo!");
    }
} else {
    console.log("Não é triângulo!");
}
