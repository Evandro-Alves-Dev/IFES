const prompt = require('prompt-sync')();
const verificaIdade = require('./verificaIdade');
/*IMPORTE AQUI O ARQUIVO verificaIdade.js*/

while (true) {
    var nome = prompt('Nome completo: ');
    var rg = prompt('RG: ');
    var cpf = prompt('CPF: ');
    var nascimento = prompt('Nascimento: ');

    if (verificaIdade.verificaMaiorIdade(nascimento) >= 18) {        
        var eleitor = prompt('Título de eleitor: ');
    } else {
        var eleitor = undefined;
    }

    console.log('Nome:', nome);
    console.log('RG:', rg);
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', nascimento);
    eleitor !== undefined ? console.log('Eleitor: ', eleitor) : console.log();

    var confirm = prompt('Confirma? (S/N)');

    if (confirm == 'S' || confirm == 's') {
        break;
    } else {
        console.clear();
    }

}