// @ts-check

function setup() {
    let divListe = document.getElementById("liste");
    for (let i = 1; i < 11; i += 1) {
        for (let j = 1; j < 11; j += 1) {
            let div = document.createElement("div");
            div.innerHTML = String(i*j);
            divListe.append(div);
        }
    }

}