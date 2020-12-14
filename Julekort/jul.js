// @ts-check

class Nisse {
    x=1200;
    y=100;
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
    constructor(divParent) {
        super();
        this.y = 500;
        this.x = Math.random()*1000 + 100;

        this.div = document.createElement("div");
        this.div.className = "spruce";
        divParent.append(this.div);

    }

}

const skog = [];


function setup() {
    const divSky = document.getElementById("sky");
    const nisse = new Nisse();
    for (let i=0; i<20; i++) {
        const gran = new Gran(divSky);
        skog.push(gran);
        gran.render();
    }
    nisse.div = document.getElementById("santa");

    setInterval(() => {
        nisse.x += nisse.vx;
        nisse.render();

        if (nisse.x < 0) {
            nisse.vx = 5;
        }
        if (nisse.x > 1050) {
            nisse.vx = -5;
        }

    }, 50);

}