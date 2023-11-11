var img = document.getElementById("imgTecnologia");
img.addEventListener('click', alterarImg )

const btnHtml = document.getElementById("btnHTML");
btnHtml.addEventListener('click', alterarHtml);

const btnCss = document.getElementById("btnCSS");
btnCss.addEventListener('click', alterarCss);

const btnJs = document.getElementById("btnJS");
btnJs.addEventListener('click', alterarJs);

function alterarHtml() {    
    img.setAttribute('src', "img/html.png");    
}

function alterarCss() {    
    img.setAttribute('src', "img/css.png");
}

function alterarJs() {    
    img.setAttribute('src', "img/js.png");
}

function alterarImg() {
    img.setAttribute('src', "img/todas.png");
}