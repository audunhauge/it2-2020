// @ts-check


const tallListe = [];

function setup() {
    const inpTallverdi =  /**  @type {HTMLInputElement} */
        (document.getElementById("tallverdi"));
    const btnLagre = document.getElementById("lagre");
    const btnTegn = document.getElementById("tegn");
    const divTalldata = document.getElementById("talldata");
    const divDiagram = document.getElementById("diagram");

    btnLagre.addEventListener("click", lagreData);
    btnTegn.addEventListener("click", tegnDiagram);

    function lagreData() {
        const tall = inpTallverdi.valueAsNumber;
        tallListe.push(tall);
        inpTallverdi.value = "";
        inpTallverdi.focus();
        divTalldata.innerHTML = String(tallListe);
        const max = maximum(tallListe);
        const sum = summer(tallListe);
        const min = minimum(tallListe);
        const snitt = gjennomsnitt(tallListe);
        const med = median(tallListe);
        divTalldata.innerHTML += `<br> Summen er ${sum}`;
        divTalldata.innerHTML += `<br> Max er ${max}`;
        divTalldata.innerHTML += `<br> Min er ${min}`;
        const spenn = max - min;
        const dupl = duplikater(tallListe);
        divTalldata.innerHTML += `<br> Dynamisk spenn er ${spenn}`;
        divTalldata.innerHTML += `<br> Gjennomsnitt er ${snitt}`;
        divTalldata.innerHTML += `<br> Duplikater er ${dupl}`;
    }

    function tegnDiagram() {
        tegnSoyler(tallListe);
    }

    /**
     * @param {number[]} tabell
     * @returns {void}
     */
    function tegnSoyler(tabell) {
        for (let i = 0; i < tabell.length; i += 1) {
            const tall = tabell[i];
            const divSoyle = document.createElement("div");
            divSoyle.className = "soyle";
        }
    }
}

/**
 * Beregner gjennomsnitt av tallverdier i en tabell
 * @param {number[]} tabell
 * @returns {number|undefined}
 */
function gjennomsnitt(tabell) {
    if (tabell.length === 0) {
        return undefined;
    }
    const sum = summer(tabell);
    return sum / tabell.length;
}


/**
 * Finner det største tallet i en tabell
 * @param {number[]} tabell
 * @returns {number}
 */
function minimum(tabell) {
    let min = tabell[0];
    for (let i = 1; i < tabell.length; i += 1) {
        const tall = tabell[i];
        if (tall < min) {
            min = tall;
        }
    }
    return min;
}

/**
 * Finner det største tallet i en tabell
 * @param {number[]} tabell
 * @returns {number}
 */
function maximum(tabell) {
    let max = tabell[0];
    for (let i = 1; i < tabell.length; i += 1) {
        const tall = tabell[i];
        if (tall > max) {
            max = tall;
        }
    }
    return max;
}


/**
 * Summerer tallene i en array
 * @param {string | any[]} tallSerie
 * @returns {number}
 */
function summer(tallSerie) {
    let sum = 0;
    for (let i = 0; i < tallSerie.length; i += 1) {
        const tall = tallSerie[i];
        sum += tall;
    }
    return sum;
}


/**
 * Finner medianverdien for en tallrekke
 * @param {number[]} tabell
 * @returns {number|undefined}
 */
function median(tabell) {
    const kopi = tabell.slice();
    kopi.sort((a, b) => a - b);
    const midten = Math.trunc(tabell.length / 2);
    return kopi[midten];
}


/**
 * @param {number[]} tabell
 * @returns {number[]}
 */
function duplikater(tabell) {

    return [];
}