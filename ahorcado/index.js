var imagenes = [
    "imagen1.png", 
    "imagen1.png", 
    "imagen2.png", 
    "imagen2.png"
]; 

var palabra = "RODRIGO"; 

function limpiar() {
    location.reload(); 
}

var imagenIndex = 0; 

function agregarItem() {
    var tbl = document.getElementById("ahorcado"); 
    if (tbl != null) {
        var row = tbl.insertRow(0); 
        var cell = row.insertCell(0); 
        cell.innerHTML = "<img src='" + imagenes[imagenIndex] + "' />";         
        imagenIndex ++; 
    }

    if (imagenes.length == imagenIndex){
        alert("PERDISTE");
    }
}

function procesar(letra) {
    var result = palabra.includes(letra); 
    if (result) {
        var labels = document.getElementsByClassName(letra);
        for (i=0;i<labels.length;i++){
            labels[i].innerText=letra;
        }
    }
    else {
        agregarItem();
    }
}

window.onload = function () {

    var acertijo = document.getElementById("acertijo"); 
    for (var i = 0; i < this.palabra.length; i++) {
        var html = acertijo.innerHTML; 
        html += "<label class='" + palabra.charAt(i) + "'> _ </label>"; 
        acertijo.innerHTML = html; 
    }

    this.document.getElementById("palabra").onkeyup = function() {
        var input = document.getElementById("palabra"); 
        if (input.value != "") {
            procesar(input.value); 
        }
        input.value = ""; 
    }
}