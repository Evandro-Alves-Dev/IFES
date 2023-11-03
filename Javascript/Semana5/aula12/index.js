//Declaração de função
function somar1(n1, n2) {
    return n1 + n2
}

//Declaração de expressão como expressão
const somar2 = function(n1, n2) {return n1 + n2};

//Declaração de arrow function
const somar3 = (n1, n2) => n1 + n2;

console.log(somar1(1,5));
console.log(somar2(5,8));
console.log(somar3(9,1));
