/**Selecionar elementos da página
Pela Tag: getElementsByTagName
Por identificação: getElementById
Por nome: getElementsByName
Por classe: getElementsByClassName
Por seletor: querySelector
**/

// document.write(Date());
// document.write(document.title);
// document.write(document.characterSet)
var corpo = document.body;
corpo.style.background = "Gray";

// getElementeById
var h1_brasil = document.getElementById("pais_brasil");
h1_brasil.style.background = "Yellow";
document.write("<p>" + h1_brasil.innerText );
document.write("<p>" + h1_brasil.innerHTML);
// alert(h1_brasil.innerHTML);

// getElementsByTagName
var array_h2 = document.getElementsByTagName("h2");
var h2_es = array_h2[0];
var h2_mg = array_h2[1];
h2_es.style.color = "Pink";
h2_mg.style.color = "DarkRed";

// getElementsByName
var array_cidade = document.getElementsByName("cidade");
var cidade_0 = array_cidade[0];
cidade_0.style.borderLeftColor = "Yellow";

// getElementsByClassName
var array_cidade_mg = document.getElementsByClassName("cidade_mg");
var cidade_mg_1 = array_cidade_mg[1];
cidade_mg_1.style.borderLeftColor = "Yellow"

// querySelector
// # seleciona pelo ID
// . seleciona pela classe
var pais = document.querySelector("#pais_brasil");
pais.style.border = "2px solid green";
pais.style.textAlign = "center";

var p = document.querySelector(".cidade_es");
p.innerText = "Teste";
