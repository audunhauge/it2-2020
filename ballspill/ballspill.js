// @ts-check



/**
 * @file Et ballspill.<br>
 * Denne kommentaren vises på første side
 * av dokumentasjonen - pga @ f i l e
 * <p>
 * Dette spillet har en ball
 * </p>
 */

/**
 * Enkel klasse for å plassere en ball
 * på skjermen. (x,y) er posisjon
 * (vx,vy) er fart, w,h er width,height
 */
class Ball {
    x=0;
    y=0;
    w=20;
    h=20;
    vx=0;
    vy=0;
    div = undefined;

    /**
     * Oppdaterer posisjon til div på skjermen
     */
    tegnPaaSkjerm() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.width = this.w + "px";
        this.div.style.height = this.h + "px";
    }
}

/**
 * ballTabell inneholder alle ballene i spillet
 */
const ballTabell = [ ];
let antall = 20;

function rndColor() {
    const colors = "red,green,blue,yellow,pink,teal,aqua,orange".split(",");
    const antall = colors.length;
    const indeks = Math.trunc( Math.random() * antall);
    return colors[indeks];
}


/**
 * Oppstartsfunksjonen
 * Lager en ball og starter en timer
 */
function setup() {
    const divBrett = document.getElementById("brett");
    const inpAntall = /**  @type {HTMLInputElement} */
     (document.getElementById("antall"));
    const btnStart = document.getElementById("start");

    const maxX = Math.random() * 7 + 4;
    const maxY = Math.random() * 7 + 4;

    btnStart.addEventListener("click", startSpillet);
    function startSpillet() {   
        antall =  Number(inpAntall.value);
        for(let i=0; i<antall; i += 1) {
            const b = new Ball();
            b.x = Math.random() * 460 + 20;
            b.y = Math.random() * 460 + 20;
            b.w = Math.random() * 150 + 2;
            b.h = b.w;
            b.vx = 5;
            b.vy = -4;
            b.div = document.createElement("div");
            divBrett.append(b.div);
            b.div.className = "ball";
            b.div.style.backgroundColor = rndColor();
            b.tegnPaaSkjerm();
            ballTabell.push(b);
        }
        setInterval(flyttPaaBallen,20);
    }

    function flyttPaaBallen() {
        for (let i=0; i<antall; i += 1) {
            const b = ballTabell[i];
            b.x += b.vx;
            b.y += b.vy;
            if (b.x > 500 - b.w) {
                b.vx = -maxX;
                b.div.style.backgroundColor = rndColor();
            }
            if (b.x < 0) {
                b.vx = maxX;
                b.div.style.backgroundColor = rndColor();
            }
            if (b.y > 500 - b.h) {
                b.vy = -maxY;
                b.div.style.backgroundColor = rndColor();
            }
            if (b.y < 0) {
                b.vy = maxY;
                b.div.style.backgroundColor = rndColor();
            }
            b.tegnPaaSkjerm();
        }
       
    }

}