// @ts-check


function setup() {
    let divTier = document.getElementById("tier");
    let divTusen = document.getElementById("tusen");
    let btnVis = document.getElementById("vis");
    btnVis.addEventListener("click", doStuff);

    function doStuff() {
        for (let i=1; i<11; i += 1 ) {
            divTier.innerHTML += " " + String(i);
        }
        let s = "<hr>";

        for (let i=20; i<51; i += 1 ) {
            s += " " + String(i);
        }
        s += "<hr>";
        for (let i=70; i>59; i -= 1 ) {
            s += " " + String(i);
        }
        s += "<p>";
        for (let i=2; i<101; i += 2 ) {
            s += " " + String(i);
        }
        s += "<hr>";
        for (let i=1; i<100; i += 2 ) {
            s += " " + String(i);
        }
        s += "<p>";
        for (let i=100; i<10001; i += 100 ) {
            s += " " + String(i);
        }
        divTusen.innerHTML = s;

    }
}