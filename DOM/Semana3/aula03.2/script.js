// Validação
(() => {
    'use strict'    
    const forms = document.querySelectorAll('.needs-validation')   
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                form.classList.add('was-validated')
            } else {
                inserirContato();
                form.classList.remove('was-validated')
                form.reset();
            }
            event.preventDefault()
            event.stopPropagation()           
        }, false)
    })
})()

atualizarTabela();

// Atualizar a tabela
function atualizarTabela() {
    limparTabela();
    const bd_contatos = getLocalStorage();
    bd_contatos.forEach(inserirLinhaTabela);
}

// Pegar um obejeto salvo em memória
function getLocalStorage() {
    return JSON.parse(localStorage.getItem('bd_contatos')) ?? [];
}

// Cria caso não exista ou atualiza um objeto
function setLocalStorage(bd_contatos) {
    localStorage.setItem('bd_contatos', JSON.stringify(bd_contatos));
}

// Inserir nova linha na tabela com um botão
function inserirLinhaTabela(contato, index) {
    var novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
    <th scope="row">${index}</th>
    <td>${contato.nome}</td>
    <td>${contato.telefone}</td>
    <td>
        <button type="button" class="btn btn-danger" id="${index}" 
        onclick="excluirContato(${index})">Excluir</button>
    </td>
    <td>
        <button type="button" class="btn btn-info" id="${index}" 
        onclick="duplicarContato(${index})">Duplicar</button>
    </td>
     <td>
        <button type="button" class="btn btn-dark" id="${index}" 
        onclick="colorirContato(${index})">Colorir</button>
    </td>`;
    document.querySelector('#tabelaContato>tbody').appendChild(novaLinha);
}

// Inserir novo contato
function inserirContato() {
    const contato = {
        nome: document.getElementById('txtNome').value,
        telefone: document.getElementById('txtTelefone').value
    }
    const bd_contatos = getLocalStorage();
    bd_contatos.push(contato);
    setLocalStorage(bd_contatos);
    atualizarTabela();
}

// Limpar todos os elementos da tabela
function limparTabela() {
    var elemento = document.querySelector("#tabelaContato>tbody");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function excluirContato(index) {
    const bd_contatos = getLocalStorage();
    bd_contatos.splice(index, 1);
    setLocalStorage(bd_contatos);
    atualizarTabela();
}

function duplicarContato(index) {
    const bd_contatos = getLocalStorage();

    const contato = {
        nome: 'Teste' + index,
        telefone: '(11)11111-111' + index
    }
    bd_contatos.push(contato);
    setLocalStorage(bd_contatos);
    atualizarTabela();
}

function colorirContato(index) {
    const bd_contatos = getLocalStorage();
    bd_contatos[index].nome = "Green"
    ;    
    setLocalStorage(bd_contatos);
    atualizarTabela();
}

