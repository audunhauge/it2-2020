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
    }

    function nextYear() {
        year += 1;
        lblYear.innerHTML = String(year);
    }

    const divMndr = document.querySelectorAll(".mnd");

    let mnr = 0;
    divMndr.forEach( (div) => {
        drawMonth(1990,mnr,div);
        mnr++;
    })
}

function skudd(y) {
    if (y % 400 === 0) return 1;
    if (y % 100 === 0) return 0;
    if (y % 4 === 0) return 1;
    return 0;
}


const antallDager = (y,m) => {
    if (m === 1) return 28 + skudd(y);
    return 30 + (m % 7 + 1) % 2;
}

function startDay(y,m) {
    // første versjon - alle mnd starter med 1. på mandag
    return 0;
}

function easter(y) {
    // første versjon returnerer en fake 1. påskedag
    return {y,m:3,d:21};
}

function addDate({y,m,d},x) {
    // første versjon bare faker svaret
    return {y,m,d:d+x};
}




/**
 * Skal tegne en måned gitt år,mnd og
 * en div til å rendre i
 * @param {number} y Gjeldende år
 * @param {number} m 0..11 måned-nr
 * @param {HTMLElement} div Div hvor måned skal rendres
 */
function drawMonth(y,m,div) {
    // disse linjene skal kanskje flyttes ut av funksjonen
    const special = [];  // liste over datoer som skal markeres
    const east = easter(y);
    special.push({y,m:4,d:17}); // 17.mai
    special.push(east);    // 1. påskedag
    special.push(addDate(east,1))  // 2.påskedag
    special.push(addDate(east,-2))  // langfredag
    special.push(addDate(east,-3))  // skjærtorsdag

    // finner special days for denne måned
    const notableThisMonth = special.filter(event => event.m === m);
    const specialDays = notableThisMonth.map(event => event.d);
    // specialDays er nå et array som [17,26]

    div.innerHTML = "";
    div.classList.add("month");
    const antall = antallDager(y,m);
    const start = startDay(y,m);
    let dagene = "";
    for (let i=1; i<42; i++) {
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

