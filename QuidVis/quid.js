//@ts-check

const choice = [
    {
        q1: "Ha et ekte 'komme ut av fengsels gratis' kort",
        q2: "En nøkkel som åpner alle dører",
    },
    {
        q1: "Aldri trenge å stå i kø igjen",
        q2: "Alle trafikklys du nærmer deg blir grønne"
    },

    {
        q1: "Tilbringe resten av livet med en seilbåt som ditt hjem",
        q2: "Tilbringe resten av livet med en bobil som ditt hjem"
    },

    {
        q1: "Bli tvunget til å danse hver gang du hører musikk",
        q2: "Bli tvunget til å synge med på hver sang du hører"
    },
    {
        q1: "Ha på en brudekjole / smoking hver eneste dag",
        q2: "Bruke badedrakt hver eneste dag"
    },

    {
        q1: "At alle hunder prøver å angripe <br> deg når de ser deg",
        q2: "At alle fugler prøver å angripe <br> deg når de ser deg"
    },
    {
        q1: "Være batman",
        q2: "Være superman"
    },

    {
        q1: "Være en berømt regissør",
        q2: "Være en berømt skuespiller"
    },
    {
        q1: "Kunne kontrollere flammer",
        q2: "Kunne kontrollere vann"
    },

    {
        q1: "Ikke kunne bruke søkemotorer",
        q2: "Ikke kunne bruke sosiale medier"
    },
    {
        q1: "Være usynlig i en dag",
        q2: "Kunne fly i en dag"
    },

    {
        q1: "Aldri mer bruke berøringskjerm",
        q2: "Aldri mer bruke tastatur og mus"
    },
    {
        q1: "Få en gratis internasjonal <br> flybillett tur-retur hvert år",
        q2: "Kunne fly innenlands når som helst gratis"
    },
    {
        q1: "Ikke dusje/bade i en måned ",
        q2: "Ikke bruke internett i en måned"
    },
    {
        q1: "Ikke kunne se på TV / filmer i et år ",
        q2: "Ikke kunne spille spill i et år"
    },

    {
        q1: "Elton John",
        q2: "Michael Jackson"
    },
    {
        q1: "Aldri gå tom for batteri på noe",
        q2: "Alltid ha gratis raskt Wi-Fi overalt"
    },
    {
        q1: "Ha en normal hverdag, men naken",
        q2: "Sove i et helt år"
    },
    {
        q1: "Være rik og stygg",
        q2: "Være fattig og fin"
    },
    {
        q1: "Finne ekte kjærlighet",
        q2: "Få 10 millioner dollar"
    },
    {
        q1: "Hytte ved sjøen",
        q2: "Hytte på fjellet"
    },
];

let mine = choice.slice();
mine.forEach((e, i) => e.id = i);





var howMany;
var q;
var k;
var divRed, divBlue, proBlue, proRed;
var over = false;

function vis(q) {
    document.getElementById("textb").innerHTML = q.q1;
    document.getElementById("textr").innerHTML = q.q2;
}

function question() {
    if (mine.length === 0) {
        q = { q1: "Testen er", q2: "Over" };
        divRed.removeEventListener("click", valg);
        divBlue.removeEventListener("click", valg);
        document.getElementById("neste").removeEventListener("click", neste);
        over = true;
        return;
    }
    k = Math.floor(Math.random() * (mine.length));
    q = mine[k];
    mine.splice(k, 1);
}

function valg(e) {
    if (over) return;
    divRed.removeEventListener("click", valg);
    divBlue.removeEventListener("click", valg);
    document.getElementById("neste").addEventListener("click", neste);
    const farge = e.target.dataset.farge;
    const { red, blue } = serverStem(q.id, farge);
    const total = red+blue;
    const redpro = 100*red/total;
    const bluepro = 100*blue/total;
    proRed.innerHTML = String(redpro.toFixed(1));
    proBlue.innerHTML = String(bluepro.toFixed(1));
    proRed.classList.add("valid");
    proBlue.classList.add("valid");
}


window.onload = function () {
    divRed = document.getElementById("red");
    divBlue = document.getElementById("blue")
    proRed = divRed.querySelector(".prosent");
    proBlue = divBlue.querySelector(".prosent");
    serverStart();
    question(); vis(q);
    document.getElementById("red").addEventListener("click", valg);
    document.getElementById("blue").addEventListener("click", valg);
};

function neste() {
    question();
    vis(q);
    proRed.innerHTML = "";
    proRed.className = "prosent";
    proBlue.innerHTML = "";
    proBlue.className = "prosent";
    document.getElementById("red").addEventListener("click", valg);
    document.getElementById("blue").addEventListener("click", valg);
    document.getElementById("neste").removeEventListener("click", neste);
}

function serverStart() {
    const strStatus = localStorage.getItem("valg");
    if (strStatus === undefined) {
        localStorage.setItem("valg", JSON.stringify([]));
    }
}

function serverStem(snr, farge) {
    let red = farge === 'red' ? 1 : 0;
    let blue = farge === 'blue' ? 1 : 0;
    const strStatus = localStorage.getItem("valg");
    const status = JSON.parse(strStatus);
    const finnes = status.find(e => e.snr === snr);
    if (finnes) {
        finnes[farge] += 1;
        red = finnes.red;
        blue = finnes.blue;
    } else {
        status.push({ snr, red, blue });
    }
    const saveJSON = JSON.stringify(status);
    localStorage.setItem("valg", saveJSON);
    return { red, blue };
}

//const resultat = serverStem(2);
//resultat.first.antall;
//resultat.second.antall;