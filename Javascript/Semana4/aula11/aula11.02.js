const prompt = require('prompt-sync')();

var array1 = [];
var array2 = [];
var array = [];

console.log('Array 1');
for (i = 0; i < 4; i++) {
    array1.push(parseInt(prompt('Digite um número: ')));
}

console.log('Array 2');
for (i = 0; i < 4; i++) {
    array2.push(parseInt(prompt('Digite um número: ')));
}

for (i = 0; i < 4; i++) {    
    array.push(array1[i] + array2[i]);
}

console.log("Soma dos arrays: " + array);

