// Modularizaçao - Chamar funcões que estão em outros arquivos
const conversor = require('./temperatureConverter');

console.log(conversor.celsiusToF(35));
console.log(conversor.FToCelsius(95));