// @ts-check

class Nisse {
    x=1200;
    y=100;
    vx = -5;
    div;

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


function setup() {
    const nisse = new Nisse();
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