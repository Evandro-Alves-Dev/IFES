// Salvar em forma de variavel simples

localStorage.setItem('nome', 'Evandro');
localStorage.setItem('telefones', '(99) 99999-9999');
const nome = localStorage.getItem('nome');
const telefones = localStorage.getItem('telefones');
document.write("<p>" + nome);
document.write("<p>" + telefones);

// Salvar em forma de objeto JSON

const contato1 = {
    nome: "Messi",
    telefones: "(11) 11111-1111"
}

const contato2 = {
    nome: "Maria",
    telefones: "(48) 5555-5555"
}

const bd_contatos = [contato1, contato2];

localStorage.setItem('bd_contatos', JSON.stringify(bd_contatos));
const c = JSON.parse(localStorage.getItem('bd_contatos'));

for (let c of bd_contatos) {
    document.write("<p>" + c.nome);
    document.write("<p>" + c.telefones);
}


