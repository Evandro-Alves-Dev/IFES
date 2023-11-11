var btn = document.getElementById("btnCalcular");
btn.addEventListener('click', calcular);

function calcular() {
    var alt = document.getElementById("txtAltura");
    var pes = document.getElementById("txtPeso");
    
    var imc = parseFloat(pes.value) / (parseFloat(alt.value) * parseFloat(alt.value));

    var div = document.getElementById("divIMC")

    div.innerText = "O IMc é: " + imc.toFixed(2);
}