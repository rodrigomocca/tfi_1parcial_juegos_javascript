var pressedColors = ["yellow", "green", "blue", "red"];
var colors = ["lightyellow", "lightgreen", "lightblue", "lightcoral"];

var jugada = [];

window.onload = function () {
    var tbl = document.getElementById("tbl");

    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].onclick = function () {
                    process(this);
                }
            }
        }
    }

    async function process(cell){
        jugada.push(cell);
        for (var i = 0; i < jugada.length; i++) {
            changeColor(jugada[i]);
            await sleep(1000);
        }
    }

    async function changeColor(cell) {
        var id = parseInt(cell.id);
        cell.style.backgroundColor = pressedColors[id];
        await sleep(1000);
        cell.style.backgroundColor = colors[id];        
    }    
}

function sleep(ms) {
    return new Promise(prom => setTimeout(prom, ms));
}
