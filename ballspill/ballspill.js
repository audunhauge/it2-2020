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
    }
}

/**
 * ballTabell inneholder alle ballene i spillet
 */
const ballTabell = [ ];
const ANTALL = 20;

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
    const divStatus = document.getElementById("status");
    const maxX = Math.random() * 7 + 4;
    const maxY = Math.random() * 7 + 4;

    for(let i=0; i<ANTALL; i += 1) {
        const b = new Ball();
        b.x = Math.random() * 460 + 20;
        b.y = Math.random() * 460 + 20;
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

    function flyttPaaBallen() {
        for (let i=0; i<ANTALL; i += 1) {
            const b = ballTabell[i];
            b.x += b.vx;
            b.y += b.vy;
            if (b.x > 500 - b.w) {
                b.vx = -maxX;
            }
            if (b.x < 0) {
                b.vx = maxX;
            }
            if (b.y > 500 - b.h) {
                b.vy = -maxY;
            }
            if (b.y < 0) {
                b.vy = maxY;
            }
            b.tegnPaaSkjerm();
        }
       
    }

}