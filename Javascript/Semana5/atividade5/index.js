const prompt = require('prompt-sync')();
var array_notebooks = [];

do {
    console.log("Sistema de Cadastro de Notebook");
    console.log("1 - Inserir Notebook");
    console.log("2 - Excluir Notebook");
    console.log("3 - Listar Notebook");
    console.log("0 - Sair");

    var opcao = prompt("Digite sua opção: ");

    if (opcao == 1) {
        console.log("\n\nInserindo Notebook...\n");
        let codigo = parseInt(prompt("Digite o código: "));
        let memoria_ram = parseInt(prompt("Digite o tamanho da memória RAM (GB): "));
        let processador = prompt("Digite o processador (Ci5): ");
        let armazenamento = parseInt(prompt("Digite o espaço de armazenamento (GB): "));
        let sistema_operacional = prompt("Digite o sistema operacional: ");

        // Neste trecho estamos declarando um objeto
        const notebook = {
            codigo: codigo,
            memoria_ram: memoria_ram + "GB",
            processador: processador,
            armazenamento: armazenamento + "GB",
            sistema_operacional: sistema_operacional
        }
        inserir_notebook(notebook);
    } else if (opcao == 2) {
        console.log("\n\nExcluindo Notebook...\n");
        let codigo = parseInt(prompt("Digite o código do notebook: "));
        excluir_notebook(codigo);
    } else if (opcao == 3) {
        console.log("\n\nListando Notebooks...\n");
        listar_notebook();
    } else if (opcao == 0) {
        console.log("\n\nSaindo do programa...\n");
    } else{
        console.log("\n\nOpção invalida!!!\n");
    }

    prompt("\nEnter para continuar...");
    console.clear();
} while (opcao != 0)


function inserir_notebook(notebook) {
    // Implementar corpo da função
    array_notebooks.push(notebook);
}

function excluir_notebook(codigo) {
    // Implementar corpo da função
    for (i = 0; i < array_notebooks.length; i++) {
        if (codigo == array_notebooks[i].codigo) {
            array_notebooks.splice(i, 1);
        }
    }
}

function listar_notebook() {
    // Implementar corpo da função    
    for (i = 0; i < array_notebooks.length; i++) {
        console.log(array_notebooks[i].codigo + " : " + array_notebooks[i].memoria_ram + " - " + array_notebooks[i].processador + " - " + array_notebooks[i].armazenamento);
    }
}