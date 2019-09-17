function limpiar() {
    var tbl = document.getElementById("tblMain");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++)
                tbl.rows[i].cells[j].innerText = "";
        }
    }
    letra = "X";
}

var letra = "X";

window.onload = function () {

    var combinaciones = [
        ["1x1", "1x2", "1x3"],
        ["1x1", "2x1", "3x1"],
        ["1x1", "2x2", "3x3"],
        ["1x2", "2x2", "3x2"],
        ["1x3", "2x3", "3x3"],
        ["2x1", "2x2", "2x3"],
        ["3x1", "3x2", "3x3"],
        ["1x3", "2x2", "3x1"]
    ];

    var tbl = document.getElementById("tblMain");
    if (tbl != null) {
        for (i = 0; i < tbl.rows.length; i++) {
            for (j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].onclick = function () {
                    getval(this);
                }
            }
        }
    }

    function getval(cel) {
        cel.innerText = letra;
        letra = letra == "X" ? "O" : "X";

        evaluarGanador();
    }

    function evaluarGanador() {
        for (i = 0; i < combinaciones.length; i++) {
            var json = combinaciones[i];

            var val1 = document.getElementById(json[0]).innerText;
            var val2 = document.getElementById(json[1]).innerText;
            var val3 = document.getElementById(json[2]).innerText;

            var notEmpty = val1 !== "" && val2 !== "" && val3 !== ""

            var equals = val1 === val2 && val1 === val3 && val1 == val2;
            if (notEmpty && equals) {
                alert("Ganador: " + val1);
            }
        }
    }
};