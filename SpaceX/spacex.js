class Rocket {
    x=300;
    y=0;
    vx = 0;
    vy = 2;
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
        let {vx,vy} = this;
        this.x += vx;
        this.y += vy;
    }
}

function setup() {
    const rakett = new Rocket(document.getElementById("rocket"));

    setInterval(() => {
        rakett.move();
        rakett.render();
    }, 200);
}