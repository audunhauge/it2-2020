// @ts-check

class Ball {
    x=0;
    y=0;
    w=0;
    h=0;
    vx=0;
    vy=0;
    div = undefined;
    tegnPaaSkjerm() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}

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