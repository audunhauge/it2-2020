// @ts-check

let timer;

class Rocket {
    x=300;
    y=0;
    vx = 0;
    vy = 0;
    ax = 0;
    ay = 2;
    drivstoff = 10;
    masse = 1;
    constructor(div) {
        this.div = div;
    }
    render() {
        const {div,x,y} = this;
        div.style.bottom = `${y}px`;
        div.style.left = `${x}px`;
    }
    move() {
        let {ax,ay} = this;
        this.vx += ax;
        this.vy += ay;
        this.x += this.vx;
        this.y += this.vy;
        this.drivstoff -= 1;
        if (this.drivstoff < 1) {
            this.ay = -1;
        }
        if (this.y < 0) {
            if (Math.abs(this.vy) < 1 ) {
                alert("Landing");
            } else {
                alert("Crash");
            }
            clearInterval(timer);
        }
    }
}

function setup() {
    const rakett = new Rocket(document.getElementById("rocket"));

    timer = setInterval(() => {
        rakett.move();
        rakett.render();
    }, 200);
}