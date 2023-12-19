
function verificaMaiorIdade(nascimento) {   
    var hoje = new Date();
    var anoAtual = hoje.getFullYear();
    var mesAtual = hoje.getMonth() + 1;

    var anoNascParts = nascimento.split('/');
    var diaNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var anoNasc = anoNascParts[2];

    var idade = anoAtual - anoNasc;

    if (mesAtual < mesNasc) {
        idade--;
    } else if (mesAtual == mesNasc) {
        if (new Date().getDate() < diaNasc) {
            idade--;
        }
    }
    return idade;
}

function eMaior(nascimento) {

    nascimento = nascimento.split('/');

    var dataNascimento = new Date(nascimento[2], nascimento[1], nascimento[0]);

    var idade = date_fns.differenceInYears(new Date(), dataNascimento);

    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    verificaMaiorIdade
}