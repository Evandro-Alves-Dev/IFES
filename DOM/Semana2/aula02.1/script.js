var mouseDw = document.getElementById("area1");
mouseDw.addEventListener('mousedown', mouseDown);

var mouseU = document.getElementById("area1");
mouseU.addEventListener('mouseup', mouseUp);

var mouseOv = document.getElementById("area2");
mouseOv.addEventListener('mouseover', mouseOver);

var mouseOu = document.getElementById("area2");
mouseOu.addEventListener('mouseout', mouseOut);

function mouseDown() {
    mouseDw.innerText = "Solte-me!";
    mouseDw.style.backgroundColor = "#1ec5e5";
}

function mouseUp() {
    mouseU.innerText = "Obrigado!";
    mouseU.style.backgroundColor = "#f04028";
}

function mouseOver() {
    mouseOv.innerText = "Obrigado!";    
}

function mouseOut() {
    mouseOu.innerText = "Passe o Mouse!";    
}