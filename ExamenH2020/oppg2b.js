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

/**
 * Liten tid - så jeg dropper tester på gyldig input
 * Dette ble vist i oppg.1
 */

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
    /**
 Kvadrat: lik bunnlinje, topplinje og høyde samt forskyvning 0.
 Rektangel: bunnlinje lik topplinje samt forskyvning 0.
 Parallellogram: bunnlinje lik topplinje samt forskyvning ikke lik 0.
 Trapes: ulik lengde på topplinje og bunnlinje.
     */
    if (bunn === topp && bunn === hoyde && forskyvning === 0 ) return "Kvadrat";
    if(bunn === topp && forskyvning === 0) return "Rektangel";
    if (bunn === topp && forskyvning !== 0) return "Parallellogram";
    if (topp !== bunn) return "Trapes";
}

function beregnAreal(bunn, topp, hoyde) {
    return (bunn + topp) * hoyde / 2;
}

function visTabell(dataOversikt,divOversikt) {
    divOversikt.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
    <div>Type firkant</div>
    <div>Bunnlinje</div>
    <div>Topplinje</div>
    <div>Høyde</div>
    <div>Forskyvning</div>
    <div>Areal</div>`;
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