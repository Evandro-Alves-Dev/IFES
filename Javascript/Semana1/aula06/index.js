const prompt = require('prompt-sync')();

nome = prompt("Digite seu nome: ");
idade = prompt("Digite sua idade: ");
endereco = prompt("Digite seu endereço: ");

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Endereco:", endereco)
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

x = parseFloat(prompt("Digite o 1º numero: "));
y = parseFloat(prompt("Digite o 2º numero: "));

console.log("A Soma é:", x + y);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

var num1 = parseInt("1");
var num2 = parseFloat("2");
var num3 = String(3);
console.log(num1 + num3); 
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

var salario_bruto = parseFloat(prompt("Digite o salario: "));
var ir = salario_bruto * 0.10;
var salario_liquido = salario_bruto - ir;

console.log("Salario liquido: R$", salario_liquido);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

var modelo_carro = prompt("Digite o modelo do carro: ");
var km = parseFloat(prompt("Digite a quantidade de KM: "));
var litros = parseFloat(prompt("Digite quantos litros gastos: "));

var consumo = km / litros;

console.log("O consumo do carro",modelo_carro, "é de", consumo, "km/litro.");
