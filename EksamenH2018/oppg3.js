// @ts-check

const utleie = {
    Granstua: ["Påske"],
    Granbo: ["Jul","Vinterferie"],
    Grantoppe: [],
    Granhaug: [],
}

function setup() {
    const selHytte = document.getElementById("hyttesel");
    const divFerie = document.getElementById("ferie");

    selHytte.addEventListener("change", viseFerie);

    function viseFerie() {
        const hytte = selHytte.value;
        const liste = utleie[hytte];
        if (liste) {
            const sel = makeSelect(liste);
            divFerie.innerHTML = "";
            divFerie.append(sel);
        }
    }

}

function makeSelect(liste) {
    const sel = document.createElement("select");
    let s = "";
    for (const opt of liste) {
        s += `<option>${opt}</option>`;
    }
    sel.innerHTML = s;
    return sel;
}


export { setup };