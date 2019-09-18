var naves = {
    A: [0, 1, 1, 0],
    B: [0, 0, 0, 0],
    C: [1, 1, 1, 0],
    D: [0, 0, 0, 0]
};

window.onload = function () {
    document.getElementById("btnEnviar").onclick = function () {
        var letra = document.getElementById("letra").value;
        var numero = parseInt(document.getElementById("numero").value);
        
        var nave = naves[letra][numero - 1];

        if (nave) {
            alert("Hundido");
        }
        else {
            alert("Agua");
        }

        var celda = document.getElementById(letra + numero);
        celda.innerHTML = nave ? "X" : "O";
    };
}
