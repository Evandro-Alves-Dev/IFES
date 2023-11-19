(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_games')) ?? [];
}

function setLocalStorage(bd_games) {
  localStorage.setItem('bd_games', JSON.stringify(bd_games));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_games = getLocalStorage();
  let index = 0;
  for (games of bd_games) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${games.nomeJogo}</td>
        <td>${games.classificacao}</td>
        <td>${games.plataforma}</td>
        <td>${games.categoria}</td>
        <td>${games.idioma}</td>
        <td>${games.dataLancamento}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const games = {
    nomeJogo: document.getElementById('nomeJogo').value,
    classificacao: document.getElementById('classificacao').value,
    plataforma: document.getElementById('plataforma').value,
    categoria: document.getElementById('categoria').value,
    idioma: document.getElementById('idioma').value,
    dataLancamento: document.getElementById('dataLancamento').value
  } 
  const bd_games = getLocalStorage();
  bd_games.push(games);
  setLocalStorage(bd_games);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_games = getLocalStorage();
  bd_games.splice(index, 1);
  setLocalStorage(bd_games);
  atualizarTabela();
}

function validarDataLancamento() { // Adaptação da função validar (10 pontos)
  const data = new Date();
  const hoje = formataData(data);
  const dataDigitada = formataData(dataLancamento.value); 

  if (dataDigitada > hoje) {
    dataLancamento.classList.remove("is-valid");
    dataLancamento.classList.add("is-invalid");
    dataLancamento.setCustomValidity("A data de lançamento não pode ser futura!!!");
    feedBackDataLancamento.innerText = "A data do lançamento não pode ser MAIOR QUE HOJE!!!";
  } else {
    dataLancamento.classList.remove("is-invalid");
    dataLancamento.classList.add("is-valid");
    dataLancamento.setCustomValidity("");
  }
}

function formataData(data) { 
  const dataAtual = new Date(data);   
  const opcoesFormatacao = { year: 'numeric', month: '2-digit', day: 'numeric' };
  const dataFormatada = dataAtual.toLocaleDateString(opcoesFormatacao);
  return dataFormatada;
}


atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const dataLancamento = document.getElementById("dataLancamento");
dataLancamento.addEventListener('input', validarDataLancamento);
const feedBackDataLancamento = document.getElementById("feedBackDataLancamento");