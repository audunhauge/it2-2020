// @ts-check

const $ = (id) => document.getElementById(id);

function setup() {

    let nyttTall = true;
    let minne = 0;
    let operator = "";

    const divDisplay = $("display");
    const divTall = $("tall");
    const divAC = $("ac");
    const divOperator = $("operator");
    const divErlik = $("erlik");

    divOperator.addEventListener("click", opererTall);
    divErlik.addEventListener("click", doOperation);

    divTall.addEventListener("click", sjekkTall);
    divAC.addEventListener("click", nullstill);

    function doOperation(e) {
        if (operator === "+") {
            const svar = minne + Number(divDisplay.innerHTML);
            divDisplay.innerHTML = String(svar);
            minne = svar;
            nyttTall = true;
        }
    }

    function opererTall(e) {
        const t = e.target;
        if (t.className = "button") {
            minne = Number(divDisplay.innerHTML);
            nyttTall = true;
        }
    }

    function nullstill(e) {
        divDisplay.innerHTML = "0";
        nyttTall = true;
    }

    function sjekkTall(e) {
        const t = e.target;
        if (t.className = "button") {
            if (nyttTall) {
                minne = Number(divDisplay.innerHTML);
                divDisplay.innerHTML = "";
            }
            nyttTall = false;
            const verdi = t.innerHTML;
            divDisplay.innerHTML += verdi;
        }
    }

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