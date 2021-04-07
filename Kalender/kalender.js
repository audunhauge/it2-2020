// @ts-check

/**
 * A date object {y,m,d}
 * @typedef { {y:number,m:number,d:number} } YMDate
 */



/**
 * Create a key given a date
 * @param {YMDate} date
 */
const makeKey = date => { let { y, m, d } = date; return [y, m, d].join("-") }

let notes;  // global slik at eventlistener kan oppdatere
let special; // also bcs eventlistener

const now = new Date();

let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();

const today = { y: year, m: month, d: day, extra: "today" };  // brukes til å markere dagens dato

const mNavn = ("Januar,Februar,Mars,April,Mai,Juni,Juli,August,"
    + "September,Oktober,November,Desember").split(",");

function setup() {

    // disse linjene skal kanskje flyttes ut av funksjonen


    const py = document.getElementById("py");
    const ny = document.getElementById("ny");
    const kalender = document.getElementById("kalender");
    const lblYear = document.getElementById("year");

    py.addEventListener("click", prevYear);
    ny.addEventListener("click", nextYear);

    function prevYear() {
        year -= 1;
        lblYear.innerHTML = String(year);
        showYear(year, divMndr);
    }

    function nextYear() {
        year += 1;
        lblYear.innerHTML = String(year);
        showYear(year, divMndr);
    }

    const divMndr = document.querySelectorAll(".mnd");
    kalender.addEventListener("click", takeNotes);
    showYear(year, divMndr);
}

/**
 * En fake løsning som lagrer teksten Heisan
 * ved klikk på en dato
 * @param {MouseEvent} e 
 */
function takeNotes(e) {
    let p = /** @type {HTMLElement} */ (e.target);
    let d = +p.innerHTML;
    while (p && ! p.classList.contains("mnd")) {
        p = p.parentNode;
    }
    if (p.dataset.m && d > 0) {
        const m = +p.dataset.m;
        const key = makeKey({y:year,m,d});
        localStorage.setItem(key,"Heisan");
        notes[m][d] = "Heisan";
        drawMonth(year, m, p, special, notes[m]);
    }
}

/**
 * Gir tilbake array med alle notater for y
 * @param {number} y
 * @returns { String[][] } notes
 */
function getNotes(y) {
    const antall = localStorage.length;
    // 32 dager slik at vi kan slå opp på 1..31 for dagene, 0 ubrukt
    const notes = new Array(12).fill(0).map(e => new Array(32).fill(""));
    // fill(new Array(32)) vil lage 12 alias til en array(32)
    if (antall > 356) {
        // kjappere å prøve alle datoer
        // genererer en del umulige datoer - ingen problemo
        // de blir bare ikke brukt
        for (let m = 1; m < 13; m++) {
            for (let d = 1; d < 33; d++) {
                const key = makeKey({ y, m, d });
                notes[m][d] = localStorage.getItem(key);
            }
        }
    } else {
        for (let i = 0; i < antall; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(String(y))) {
                const [_,m,d] = key.split('-');
                notes[m][d] = localStorage.getItem(key);
            }
        }
    }
    return notes;
}

function showYear(y, divMndr) {
    // henter ut notater for dette året
    notes = getNotes(y);
    special = [];
    const east = easter(y);
    special.push({ y, m: 4, d: 17 }); // 17.mai
    special.push({ y, m: 11, d: 24 }); // Julekveld
    special.push({ y, m: 4, d: 1 }); // 1.mai
    special.push({ y, m: 0, d: 1 }); // nyttårsdag
    special.push(east);    // 1. påskedag
    special.push(addDate(east, 1))  // 2.påskedag
    special.push(addDate(east, -2))  // langfredag
    special.push(addDate(east, -3))  // skjærtorsdag
    special.push(addDate(addDate(east, 25), 24))  // 1.pinse
    special.push(addDate(addDate(east, 25), 25))  // 2.pinse
    // addDate virker bare for maks ~ 30 dager
    let mnr = 0;
    divMndr.forEach((div) => {
        drawMonth(year, mnr, div, special, notes[mnr]);
        mnr++;
    })
}

function skudd(y) {
    if (y % 400 === 0) return 1;
    if (y % 100 === 0) return 0;
    if (y % 4 === 0) return 1;
    return 0;
}


const antallDager = (y, m) => {
    if (m === 1) return 28 + skudd(y);
    return 30 + (m % 7 + 1) % 2;
}

function startDay(y, m) {
    return (new Date(y, m, 0)).getDay();
    // egentlig dagen før, men det korrigerer for
    // at amerikanere regner Søndag som 1. dag i uka
}

/**
 * Beregner påske for gitt år
 * Endra litt i forhold til quiz - måned starter på 0
 * @param {number} y 
 * @returns {YMDate} 1. påskedag
 */
function easter(y) {
    const a = y % 19;
    const b = y % 4;
    const c = y % 7;
    const p = Math.floor(y / 100);
    const q = Math.floor((13 + 8 * p) / 25);
    const m = Math.floor(15 - q + p - p / 4) % 30;
    const n = Math.floor(4 + p - p / 4) % 7;
    const d = Math.floor(19 * a + m) % 30;
    const e = Math.floor(2 * b + 4 * c + 6 * d + n) % 7;
    const days = Math.floor(22 + d + e);
    if (d === 29 && e === 6) return { y, m: 3, d: 19 };
    if (d === 28 && e === 6) return { y, m: 3, d: 18 };
    if (days > 31) return { y, m: 3, d: days - 31 };
    return { y, m: 2, d: days };
}

/**
 * Tar imot en dato og en forskyvning på x-dager
 * Gir tilbake ny dato  +- x dager
 * Antar at vi er i samme år, og ikke går mer enn 1 måned frem/tilbake
 * Antar at i januar går vi ikke mer tilbake enn til 1. januar
 * Antar at i desember går vi ikke lenger fram enn til 31. des
 * Kan da gjøre en del forenklinger
 * @param {YMDate} dato
 * @param {number} x
 * @returns { {y:number,m:number,d:number} } ny dato
 */
function addDate({ y, m, d }, x) {
    const antall = antallDager(y, m);
    const dd = d + x;
    // happy path - den mest sannsynlige - hopp raskt ut
    if (dd > 0 && dd <= antall) return { y, m, d: dd };
    if (dd < 0) {
        const prev = antallDager(y, m - 1);
        return { y, m: m - 1, d: prev + dd };
    }
    return { y, m: m + 1, d: dd - antall }
}




/**
 * Skal tegne en måned gitt år,mnd og
 * en div til å rendre i
 * @param {number} y Gjeldende år
 * @param {number} m 0..11 måned-nr
 * @param {HTMLElement} div Div hvor måned skal rendres
 */
function drawMonth(y, m, div, special, notes) {
    // finner special days for denne måned
    const notableThisMonth = special.filter(event => event.m === m);
    const specialDays = notableThisMonth.map(event => event.d);
    // specialDays er nå et array som [17,26]

    div.innerHTML = "";
    div.classList.add("month");
    const antall = antallDager(y, m);
    const start = startDay(y, m);
    let dagene = "";
    for (let i = 1; i < 42; i++) {
        const day = i - start;
        let marked = (specialDays.includes(day))
            ? "special"
            : "";
        if (today.y === y && today.m === m && today.d === day) {
            marked += " today";
        }
        if (notes[day]) {
            marked += " note";
        }
        const txt = (day > 0 && day <= antall) ? String(day) : "";
        dagene += `<span class="${marked}">${txt}</span>`;
    }
    let s = "";
    s += `
    <fieldset>
       <legend>${mNavn[m]} </legend>
       <div class="ukedager">
         <span>Ma</span> 
         <span>Ti</span> 
         <span>On</span> 
         <span>To</span> 
         <span>Fr</span> 
         <span>Lø</span> 
         <span>Sø</span>
       </div>
       <div class="dager">
         ${dagene}
       </div>
    </fieldset>`;
    div.innerHTML = s;
}

/**
 * Lokalstorage er ikke godt egna som database, men vi kan få
 * til en del brukbare løsninger allikevel
 * 
 * Lagrer alle notater med  y-m-d som nøkkel
 * Lagrer index-2021 med liste over alle keys for det året
 * 
 * Ved visning av et år:
 *   hent index-xxxx for det året
 *   .split(",") og loop gjennom nøklene og hent data
 *   PRO
 *     slipper 365 * getItem
 *   CONTRA
 *     må oppdatere to verdier ved hver lagring
 *     setItem("y-m-d", notat)
 *     setItem("index-y", notatliste.join(",") )
 *     notatliste er en array over alle keys for dette året
 *     Tilsvarende ved sletting må begge oppdateres.
 * 
 * ALTERNATIVT
 *   bruker en løkke til å gå gjennom alle keys
 *   lager en liste over de som gjelder for dette året
 *   CONTRA
 *     n * key(i) , n vokser for hvert nye notat
 * 
 * ALTERNATIVT
 *    dersom localStorage.length < 365
 *       loop gjennom alle keys
 *    ELLERS
 *       loop gjennom 365 mulige keys for gjeldende år
 *    Dersom dette er kjapt nok er de andre løsningen OVERKILL
 * 
 *  VELGER SISTE LØSNING
 */


/**
 * Lagrer tekst på en gitt dato
 * Dersom tekst er "" da slettes notatet
 * @param {YMDate} dato
 * @param {string} text
 */
function lagreTextFor(dato, text) {
    const key = makeKey(dato);
    if (text === "") {
        return localStorage.removeItem(key);
    }
    localStorage.setItem(key, text);
}

/**
 * Henter tekst fra en gitt dato
 * Returnerer "" dersom ingenting er lagra
 * @param {YMDate} dato
 * @returns {string} text
 */
function hentTextFor(dato) {
    const key = makeKey(dato);
    return localStorage.getItem(key) || '';
}