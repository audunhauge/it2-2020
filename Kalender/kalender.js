// @ts-check


let year = 2021;
let month = 2;

const mNavn = ("Januar,Februar,Mars,April,Mai,Juni,Juli,August,"
    + "September,Oktober,November,Desember").split(",");

function setup() {

    const py = document.getElementById("py");
    const ny = document.getElementById("ny");
    const lblYear = document.getElementById("year");

    py.addEventListener("click", prevYear);
    ny.addEventListener("click", nextYear);

    function prevYear() {
        year -= 1;
        lblYear.innerHTML = String(year);
        showYear(divMndr);
    }

    function nextYear() {
        year += 1;
        lblYear.innerHTML = String(year);
        showYear(divMndr);
    }

    const divMndr = document.querySelectorAll(".mnd");
    showYear(divMndr);
    
}

function showYear(divMndr) {
    let mnr = 0;
    divMndr.forEach((div) => {
        drawMonth(year, mnr, div);
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
    if (d === 29 && e === 6) return { m: 3, d: 19 };
    if (d === 28 && e === 6) return { m: 3, d: 18 };
    if (days > 31) return { m: 3, d: days - 31 };
    return { m: 2, d: days };
}

/**
 * Tar imot en dato og en forskyvning på x-dager
 * Gir tilbake ny dato  +- x dager
 * Antar at vi er i samme år, og ikke går mer enn 1 måned frem/tilbake
 * Antar at i januar går vi ikke mer tilbake enn til 1. januar
 * Antar at i desember går vi ikke lenger fram enn til 31. des
 * Kan da gjøre en del forenklinger
 * @param { {y:number,m:number,d:number} } dato
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
function drawMonth(y, m, div) {
    // disse linjene skal kanskje flyttes ut av funksjonen
    const special = [];  // liste over datoer som skal markeres
    const east = easter(y);
    special.push({ y, m: 4, d: 17 }); // 17.mai
    special.push(east);    // 1. påskedag
    special.push(addDate(east, 1))  // 2.påskedag
    special.push(addDate(east, -2))  // langfredag
    special.push(addDate(east, -3))  // skjærtorsdag

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
        const marked = (specialDays.includes(day)) ? 'class="special"' : "";
        const txt = (day > 0 && day <= antall) ? String(day) : "";
        dagene += `<span ${marked}>${txt}</span>`;
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

