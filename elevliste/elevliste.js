// @ts-check

const elevListe = [ ];

function setup() {
    let divElever = document.getElementById("elever");
    let divFunnet = document.getElementById("funnet");
    let inpNavn = document.getElementById("navn");
    let inpLetefelt = document.getElementById("letefelt");

    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click",lagreElev);

    let btnFinn = document.getElementById("finn");
    btnFinn.addEventListener("click", finnElev);

    function finnElev() {
        divFunnet.innerHTML = "";
        // @ts-ignore
        let navn = inpLetefelt.value;
        let antall = elevListe.length;
        for (let i=0; i<antall; i += 1) {
            let elev = elevListe[i];
            if (elev.includes(navn)) {
                divFunnet.innerHTML += elev + "<br>";
                // break;
            }
        }
    }

    function lagreElev() {
        // @ts-ignore
        let navn = inpNavn.value;
        if (navn === "") {
            alert("Skriv ett gyldig navn");
            return;
        }
        elevListe.push(navn);
        // @ts-ignore
        inpNavn.value = "";
        inpNavn.focus();
        visElever();
    }

    function visElever() {
        let s = "";
        let antall = elevListe.length;
        for (let i=0; i<antall; i += 1) {
            s += elevListe[i] + "<br>";
        }
        divElever.innerHTML = s;
    }
}