
var array = ["Caio", "Nathan", "Fernanda", "Evandro"];
console.log(array);
console.log(array[0]);

// Push add elemento na ultima posição
array.push("Mable");
console.log(array);

// Pop remove elemento na ultima posição
array.pop();
console.log(array);

// Shift remove elemento na primeira posição
array.shift();
console.log(array);

// Unshift add elemento ou elementos na primeira posição
array.unshift("Elemento1", "Elemento2", 10);
console.log(array);

// Splice remove elementos de um array(range) e (opcionalmente) os subistitui
array.splice(1, 2, "sub1", "sub1");
console.log(array);

// Sort ordena os elementos do array
array.sort();
console.log(array);

// IndexOf busca um elemento noa array e retorna o indice
console.log(array.indexOf("sub1")); //primeira ocorrencia
console.log(array.indexOf("sub1", 2)); //segunda ocorrencia


var estados = ['ES', 'RJ', 'SP', 'MG'];
estados.unshift('MT');
estados.splice(2, 2, 'AC', 'AL', 'AP');

console.log(estados);

