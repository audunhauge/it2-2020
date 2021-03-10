// @ts-check


let year = 2021;
let month = 2;

const mNavn = "Jan,Feb,Mar,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(",");

function setup() {
    const py = document.getElementById("py");
    const ny = document.getElementById("ny");
    const lblYear = document.getElementById("year");

    const pm = document.getElementById("pm");
    const nm = document.getElementById("nm");
    const lblMonth = document.getElementById("month");

    py.addEventListener("click", prevYear);
    ny.addEventListener("click", nextYear);

    pm.addEventListener("click", prevMonth);
    nm.addEventListener("click", nextMonth);

    lblMonth.innerHTML = mNavn[month]

    function prevYear() {
        year -= 1;
        lblYear.innerHTML = String(year);
    }

    function nextYear() {
        year += 1;
        lblYear.innerHTML = String(year);
    }

    function prevMonth() {
        // dersom month er 0 
        // da skal month bli 11
        // ellers reduser month med 1
        if (month === 0) {
            month = 11;
            prevYear();
        } else {
            month -= 1;
        }
        lblMonth.innerHTML = mNavn[month];
    }

    function nextMonth() {
        // dersom month er 11
        // da skal den bli 0
        // ellers øk med 1
        if (month === 11) {
            month = 0;
            nextYear();
        } else {
            month += 1;
        }
        lblMonth.innerHTML = mNavn[month]
    }

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
    let s = "";
    
    div.innerHTML = s;
}

