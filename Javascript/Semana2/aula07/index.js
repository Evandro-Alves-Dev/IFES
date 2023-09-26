const prompt = require('prompt-sync')();

console.log("-=-=-=-=Comando de decisão-=-=-=-=")
nome = prompt("Digite seu nome: ");
salario = parseFloat(prompt("Digite seu salario: "));

if (salario <= 1903.98){
    var ir = salario * 0.05;    
} else if (salario <= 2826.65){
    var ir = salario * 0.075;   
} else {
    var ir = salario * 0.15;    
}

var salario_liquido = salario - ir;
console.log("Salario Liquido é: R$", salario_liquido)