const container = document.querySelector('#container');
container.addEventListener('click', trocarCor);

const btnCriar = document.querySelector('button');
btnCriar.addEventListener('click', criar);

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function trocarCor(e) {
    var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCor;
}

function criar() {
    var div = document.createElement("div");
    div.className = "quadrado";
    container.appendChild(div);
}