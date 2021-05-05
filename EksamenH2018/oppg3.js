// @ts-check

/**
 * Kortform for document.getElementById
 * @param {string} id 
 * @returns {any}
 */
const $ = id => document.getElementById(id);

/**
 * For å slippe røde streker under .value
 * @param {any} elm 
 * @returns {string}
 */
const getValue = elm => elm.value

const utleie = {
    Granstua: ["Påske"],
    Granbo: ["Jul","Vinterferie"],
    Grantoppe: [],
    Granhaug: [],
}

function setup() {
    const selHytte = $("hyttesel");
    const divFerie = $("ferie");

    selHytte.addEventListener("change", viseFerie);

    function viseFerie() {
        const hytte = getValue(selHytte);
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