const prompt = require('prompt-sync')();

nome = prompt("Digite o nome do aluno: ");
n1 = parseFloat(prompt("Digite a 1ª nota: "));
n2 = parseFloat(prompt("Digite a 2ª nota: "));
n3 = parseFloat(prompt("Digite a 3ª nota: "));

var media = (n1 + n2 + n3) / 3;

if(media >= 6) {
    var resultado = "Aprovado";
}else {
    var resultado = "Reprovado";
}

console.log("Aluno ", nome, "tem a média", media, "e foi", resultado);