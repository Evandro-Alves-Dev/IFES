// Selecionar todos elementos da classe 'produto_preco'
var array_produto_preco = document.getElementsByClassName("produto_preco");

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
var soma = 0;
for(var i = 0; i < array_produto_preco.length; i++) {
    let valor_unitario = parseFloat(array_produto_preco[i].innerText)
    soma = soma + valor_unitario;
}

// Escrever no conteúdo da página o valor da soma 
document.write("Total: R$ " + soma);
