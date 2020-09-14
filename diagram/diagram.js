// @ts-check


const tallListe = [ ];

function setup() {
    const inpTallverdi =  /**  @type {HTMLInputElement} */
        (document.getElementById("tallverdi"));
    const btnLagre =document.getElementById("lagre");
    const btnTegn = document.getElementById("tegn");
    const divTalldata = document.getElementById("talldata");

    btnLagre.addEventListener("click", lagreData);
    btnTegn.addEventListener("click",tegnSoyler);

    function lagreData() {
        const tall = inpTallverdi.valueAsNumber;
        tallListe.push(tall);
        inpTallverdi.value = "";
        inpTallverdi.focus();
        divTalldata.innerHTML = String(tallListe);
        divTalldata.innerHTML += "<br> Summen er " + summer(tallListe);
        divTalldata.innerHTML += "<br> Max er " + maximum(tallListe);
    }

    function tegnSoyler() {

    }
}

/**
 * Beregner summen av en array
 * summer([1,2,3]) === 1+2+3
 * @param {Array<Number>} tallSerie
 * @returns {Number}
 */
function summer(tallSerie) {
    let sum = 0;
    for (let i=0; i < tallSerie.length; i += 1) {
       const tall = tallSerie[i];
       sum += tall;
    }
    return sum;
}