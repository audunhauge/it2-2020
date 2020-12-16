// @ts-check

class Nisse {
    x = 1200;
    y = 100;
    w = 150;
    h = 80;
    vx = -5;
    div;

    constructor() {

    }

    render() {
        if (this.vx < 0) {
            this.div.style.transform = "scaleX(1)";
        } else {
            this.div.style.transform = "scaleX(-1)";
        }
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }
}


class Gran extends Nisse {
    vy = 0;
    status = "klar";
    constructor(divParent) {
        super();
        this.y = 500;
        this.x = Math.random() * 1000 + 100;
        this.w = 80;
        this.h = 150;
        this.damage = Math.floor(Math.random()* 30 + 10);
        this.div = document.createElement("div");
        this.div.className = "spruce";
        divParent.append(this.div);
        this.div.style.height = (this.damage*5) + "px";

    }

    skyt() {
        this.status = "aktiv";
        this.vy = -15;
    }

}

const skog = [];


function setup() {
    const FART = 15;
    const divSky = document.getElementById("sky");
    addEventListener("keydown", styrSpillet);
    const nisse = new Nisse();
    const gryla = new Nisse();
    gryla.x = 600;
    gryla.y = 480;
    for (let i = 0; i < 20; i++) {
        const gran = new Gran(divSky);
        skog.push(gran);
        gran.render();
    }
    nisse.div = document.getElementById("santa");
    gryla.div = document.getElementById("gryla");

    function styrSpillet(e) {
        switch (e.key) {
            case "ArrowLeft": {
                gryla.x -= FART;
            } break;
            case "ArrowRight": {
                gryla.x += FART;
            } break;
            case " ": {
                for (let tre of skog) {
                    if (tre.status !== "klar") continue;
                    const avstand = Math.abs(gryla.x - tre.x);
                    if (avstand < 20) {
                        tre.skyt();
                        break;
                    }
                }
                /* for alle juletrær
                      med et valgt juletre
                      regn ut avstand til gryla
                      dersom avstand <  20
                         fyr av dette juletreet
                         break
                      */
            } break;
        }
        gryla.render();
    }

    setInterval(() => {
        nisse.x += nisse.vx;
        nisse.render();

        if (nisse.x < 0) {
            nisse.vx = 5;
        }
        if (nisse.x > 1050) {
            nisse.vx = -5;
        }
        /*
        travaser alle trær i skogen
          dersom tre er aktivt
             flytt treet oppover med vy
        */
        for (let tre of skog) {
            if (tre.status === "aktiv") {
                tre.y += tre.vy;
                tre.render();
                /**
                 * dersom tre og nisse kolliderer
                 *    da detter nissen ned 10px
                 *    tre blir ferdig
                 *    flytt tre ut av skjermen
                 */
                if (collisjon(tre,nisse)) {
                    nisse.y += tre.damage;
                    tre.status = "ferdig";
                    tre.y = -200;
                    tre.render();
                }
                if (tre.y < -200) {
                    tre.status = "ferdig";
                }
            }
        }


    }, 50);

}

/**
 * 
 * @param { {x:number,y:number,w:number,h:number} } a 
 * @param { {x:number,y:number,w:number,h:number} } b 
 */

function collisjon(a,b) {
    return a.x > b.x - a.w &&
           a.x < b.x + b.w &&
           a.y > b.y - a.h &&
           a.y < b.y + b.h
}