// @ts-check

const $ = (id) => document.getElementById(id);

function setup() {

    lageKnapper("tall", "789456123-0.".split(""));
    lageKnapper("operator", "+-*/".split(""));
    lageKnapper("funk", "sin,cos,tan".split(","));

    function lageKnapper(id, symboler) {
        const divRamme = $(id);
        for (let i = 0; i < symboler.length; i++) {
            const div = document.createElement("div");
            div.className = "button";
            divRamme.append(div);
            div.innerHTML = symboler[i];
        }
    }



}