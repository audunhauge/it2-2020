// @ts-check
class Elev {
    fornavn = "";
    etternavn = "";
    adresse = "";
    klasse = "";
    kontaktlerar = "";
}

const elevListe = [];

function setup() {
    let divElever = document.getElementById("elever");
    let divFunnet = document.getElementById("funnet");
    let inpFornavn = document.getElementById("fornavn");
    let inpEtternavn = document.getElementById("etternavn");
    let inpAdresse = document.getElementById("adresse");
    let inpKlasse = document.getElementById("klasse");
    let inpKontaktlerar = document.getElementById("kontaktlerar");
    let inpLetefelt = document.getElementById("letefelt");

    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", lagreElev);

    let btnFinn = document.getElementById("finn");
    btnFinn.addEventListener("click", finnElev);

    function finnElev() {
        divFunnet.innerHTML = "";
        // @ts-ignore
        let navn = inpLetefelt.value;
        let antall = elevListe.length;
        for (let i = 0; i < antall; i += 1) {
            let elev = elevListe[i];
            if (elev.etternavn.includes(navn)) {
                divFunnet.innerHTML += 
                elev.fornavn + " " 
                + elev.adresse + "<br>";
                // break;
            }
        }
    }

    function lagreElev() {
        // @ts-ignore
        let fornavn = inpFornavn.value;
        // @ts-ignore
        let etternavn = inpEtternavn.value;
        // @ts-ignore
        let adresse = inpAdresse.value;
        // @ts-ignore
        let klasse = inpKlasse.value;
        // @ts-ignore
        let kontaktlerar = inpKontaktlerar.value;
        if (fornavn === "") {
            alert("Skriv ett gyldig navn");
            return;
        }
        let elev = new Elev();
        elev.fornavn = fornavn;
        elev.etternavn = etternavn;
        elev.adresse = adresse;
        elev.klasse = klasse;
        elev.kontaktlerar = kontaktlerar;
        elevListe.push(elev);
        visElever();
    }

    function visElever() {
        let s = "";
        let antall = elevListe.length;
        for (let i = 0; i < antall; i += 1) {
            let elev = elevListe[i];
            s += elev.fornavn + " " + elev.etternavn + "<br>";
        }
        divElever.innerHTML = s;
    }
}