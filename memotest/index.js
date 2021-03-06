var imagenes = [
    "imagen1.png",
    "imagen1.png",
    "imagen2.png",
    "imagen2.png"
];

function limpiar(){
    location.reload();
}

window.onload = function () {

    var selectedId = "";
    var selected = "";
    imagenes = imagenes.sort(function () { return 0.5 - Math.random() });
    var tbl = document.getElementById("tblMain");
    if (tbl != null) {
        for (i = 0; i < tbl.rows.length; i++) {
            for (j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].firstElementChild.src = imagenes.pop();
                tbl.rows[i].cells[j].onclick = function () {
                    cellClick(this);
                }
            }
        }
    }

    async function cellClick(cell) {
        var img = cell.firstElementChild;
        if (img.style.display === "none") {
            img.style.display = "block";
            if (selected == "") {
                selectedId = img.id;
                selected = img.src;
            } else if (selected != img.src) {
                await sleep(2000);
                img.style.display = "none";
                document.getElementById(selectedId).style.display = "none";
                selectedId = "";
                selected = "";
            } else {
                selectedId = "";
                selected = "";
            }
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}