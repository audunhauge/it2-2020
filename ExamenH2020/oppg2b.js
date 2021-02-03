// @ts-check

/**
 * @typedef { [string,number,number,number,number,number]} Kvadrat
 */

/**
 * @type {Kvadrat[]}
 */
const dataOversikt = [
    ["Kvadrat", 10, 10, 10,0, 100],
    ["Rektangel", 20, 20, 5, 0, 100],
    ["Rektangel", 20, 20, 5, 0, 100],
    ["Rektangel", 20, 20, 5, 0, 100],
]


function setup() {
    const divOversikt = document.getElementById("oversikt");
    const btnLagre = document.getElementById("lagre");
    visTabell(dataOversikt, divOversikt);
    btnLagre.addEventListener("click", lagreFirkant);

    function lagreFirkant() {
        const bunn = document.getElementById("bunn").valueAsNumber;
        const topp = document.getElementById("topp").valueAsNumber;
        const hoyde = document.getElementById("hoyde").valueAsNumber;
        const forskyvning = document.getElementById("skyv").valueAsNumber;
        const type = getType(bunn, topp, hoyde, forskyvning);
        const areal = beregnAreal(bunn, topp, hoyde);
        dataOversikt.push([type,bunn,topp,hoyde,forskyvning,areal]);
        visTabell(dataOversikt, divOversikt);
    }
}


function getType(bunn, topp, hoyde, forskyvning) {
    return "Firkant";
}

function beregnAreal(bunn, topp, hoyde) {
    return (bunn + topp) * hoyde / 2;
}

function visTabell(dataOversikt,divOversikt) {
    const div = document.createElement("div");
    // løsning med map for overskriftene
    // Her velger jeg rett-fram løsningen da map-løsningen
    // ikke er mer kompakt - tyngre å forstå for mange
    /*
    div.innerHTML = "Type firkant,Bunnlinje,Topplinje,Høyde,Forskyvning,Areal".split(",")
      .map(tittel => `<div>${tittel}</div>`).join("");
    */
    div.innerHTML = `
    <div>Type firkant</div>
    <div>Bunnlinje</div>
    <div>Topplinje</div>
    <div>Høyde</div>
    <div>Forskyvning</div>
    <div>Areal</div>`;
    //*/
    divOversikt.append(div);
    for (let i=0; i < dataOversikt.length; i++) {
        const rad = dataOversikt[i];
        const ramme = document.createElement("div");
        divOversikt.append(ramme);
        for (let j=0; j < rad.length; j++) {
            const element = rad[j];
            const div = document.createElement("div");
            ramme.append(div);
            div.innerHTML = String(element);
        }
    }
}