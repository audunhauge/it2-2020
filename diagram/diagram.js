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
 * Finner det største tallet i en tabell (array)
 * @param {Number[]} enArray - en liste med tall
 * @returns {Number}
 */
function maximum(enArray) {
   let m = enArray[0];  // antar at dette er størst
   for (let i=0; i < enArray.length; i += 1) {
       const t = enArray[i];
       if (m > t) m = t;
   }
   return m;
}

/**
 * Beregner summen av en array
 * summer([1,2,3]) === 1+2+3
 * @param {number[]} tallSerie
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