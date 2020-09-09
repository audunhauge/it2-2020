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
    w=0;
    h=0;
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
 * Oppstartsfunksjonen
 * Lager en ball og starter en timer
 */
function setup() {
    const divBrett = document.getElementById("brett");
    const divStatus = document.getElementById("status");
    const b = new Ball();
    b.x = 100;
    b.y = 100;
    b.h = 20;
    b.w = 20;
    b.vx = 5;
    b.vy = 0;
    b.div = document.createElement("div");
    divBrett.append(b.div);
    b.div.className = "ball";

    b.tegnPaaSkjerm();

    setInterval(flyttPaaBallen,20);

    function flyttPaaBallen() {
        b.x += 5;
        b.tegnPaaSkjerm();
    }

}