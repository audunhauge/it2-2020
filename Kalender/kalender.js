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

/**
 * Skal returnere 0 eller 1 avhengig om det
 * er skuddår og m === 1 (februar)
 * @param {number} y år
 * @param {number} m måned
 * @returns {number} 0|1
 */
function skudd(y,m) {
   let s = 0;
   // noe kode
   return s;
}

/**
 * Returnere antall dager for gitt y,m
 * @param {number} y år
 * @param {number} m måned
 * @returns {number} antall dager i gitt måned
 */
function dagerImaaned(y,m) {
    const dager = [31,28,31,30,31, ]
    // skudd
    return 31;
}


/**
 * Skal tegne en måned gitt år,mnd og
 * en div til å rendre i
 * @param {number} y Gjeldende år
 * @param {number} m 0..11 måned-nr
 * @param {HTMLElement} div Div hvor måned skal rendres
 */
function drawMonth(y,m,div) {
    div.innerHTML = "";
    div.classList.add("month");
    let dagene = "";
    for (let i=1; i<42; i++) {
        dagene += `<span>${i}</span>`;
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

