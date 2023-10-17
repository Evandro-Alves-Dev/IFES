const prompt = require('prompt-sync')();

var array1 = [];
var array2 = [];
var array = [];

console.log('Array 1');
for (i = 0; i < 5; i++) {
    array1.push(parseInt(prompt('Digite um número: ')));
}

console.log('Array 2');
for (i = 0; i < 5; i++) {
    array2.push(parseInt(prompt('Digite um número: ')));
}

for (i = 0; i < 5; i++) {      
    for(j = 0; j < 5; j++) {
        if (array1[i] == array2[j]) {
            array.push(array1[i]);
        }
    }    
}

console.log("Numeros em comum: " + array);
