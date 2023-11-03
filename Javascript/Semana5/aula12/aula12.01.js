const prompt = require('prompt-sync')();

for (i = 1; i <= 5; i++) {
    var nome = prompt("Digite seu nome: ");
    var altura = parseFloat(prompt("Digite sua altura (Metros): "));
    var peso = parseFloat(prompt("Digite seu peso (Kg): "));

    var imc = calcular_imc(altura, peso);
    var codigo_situacao = calcular_situacao(imc);
    var descricao_situacao = verificar_descricao_situacao(codigo_situacao);
}

function calcular_imc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

function calcular_situacao(imc) {
    let codigo_situacao;
    if (imc < 18.5) {
        codigo_situacao = 1;
    } else if (imc >= 18.5 && imc <= 24.9) {
        codigo_situacao = 2;
    } else if (imc >= 25.0 && imc <= 29.9) {
        codigo_situacao = 3;
    } else {
        codigo_situacao = 4;
    }
    return codigo_situacao;
}

function verificar_descricao_situacao(codigo_situacao) {
    let descricao_situacao;
    if (codigo_situacao == 1) {
        descricao_situacao = "Você está abaixo do peso ideal!";
    } else if (codigo_situacao == 2) {
        descricao_situacao = "Parabéns! Você está em seu peso normal!";
    } else if (codigo_situacao == 3) {
        descricao_situacao = "Você está acima de seu peso (sobrepeso)!";
    } else {
        descricao_situacao = "Obsidade!";
    }
    console.log(descricao_situacao +"\n");
}
