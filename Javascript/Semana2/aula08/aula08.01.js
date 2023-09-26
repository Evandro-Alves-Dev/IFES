const prompt = require('prompt-sync')();

n1 = parseFloat(prompt("Digite o 1º numero: "));
n2 = parseFloat(prompt("Digite o 2º numero: "));

if (n1 > 0 && n2 > 0) {
    if (n1 % 2 == 0 && n2 % 2 == 0) {
        console.log("Numeros são pares");
    } else if (n1 % 2 != 0 && n2 % 2 != 0) {
        console.log("Numeros são impares");
    } else {
        console.log("Um numero é par ou outro é impar");
    }
} else {
    console.log("Existe pelo menos um número 0 ou negativo!");
}
