const btn = document.getElementById("btnAdicionar");
btn.addEventListener('click', adicionar);

function adicionar() {
    var num = parseInt(Math.random() * (100) + 1);
    var novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `<td>${num}</td>`;
    document.querySelector("#tabela1").appendChild(novaLinha);
} 