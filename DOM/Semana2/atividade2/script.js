var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var selectAnimais = document.getElementById("select_animais");

// Selecionar elemento 'container' ( 1 ponto)
var container = document.getElementById("container");

// Selecionar elemento 'nome' ( 1 ponto)
var nomeAnimal = document.getElementById("nome");

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
selectAnimais.addEventListener('input', listarAnimais);

// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);

// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  var elemento = document.querySelector("#container");

  if (selectAnimais.value == "dog") {
    for (var i = 0; i < cachorros.length; i++) {
      var img = document.createElement("img");
      img.nome = cachorros[i].nome
      img.src = "img/" + cachorros[i].imagem + ".jpg"
      elemento.appendChild(img);
    }    
  } else {    
    for (var i = 0; i < gatos.length; i++) {
      var img = document.createElement("img")
      img.nome = gatos[i].nome
      img.src = "img/" + gatos[i].imagem + ".jpg"
      elemento.appendChild(img)
    }
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  nomeAnimal.innerText= e.target.nome;

}

function limparNome() {
  nomeAnimal.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}