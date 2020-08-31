// @ts-check

const elevListe = [
    "ole",
    "petter",
    "kari",
    "lise",
    "sjur",
    "anne"
];

function setup() {
    let divElever = document.getElementById("elever");
    let divFunnet = document.getElementById("funnet");
    let btnVis = document.getElementById("vis");
    btnVis.addEventListener("click", visElever);

    function visElever() {
        let s = "";
        let antall = elevListe.length;
        for (let i=0; i<antall; i += 1) {
            s += elevListe[i] + "<br>";
        }


        divElever.innerHTML = s;
    }
}