// @ts-check

const $ = (id) => document.getElementById(id);

function setup() {
    const divTall = $("tall");
    const symboler = "789456123-0.";
    for (let i=0; i<12; i++) {
        const div = document.createElement("div");
        div.className = "button";
        divTall.append(div);
        div.innerHTML = symboler.charAt(i);
    }
    

}