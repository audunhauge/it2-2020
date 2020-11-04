// @ts-check

const $ = (id) => document.getElementById(id);

function setup() {

    let nyttTall = true;
    let minne = 0;
    let operator = "";
    let trigMode = "deg";

    const divDisplay = $("display");
    const divTall = $("tall");
    const divAC = $("ac");
    const divOperator = $("operator");
    const divErlik = $("erlik");
    const divFunk = $("funk");
    const divSpecial = $("specials");
    const divMode = $("mode");

    function visMode() {
        divMode.innerHTML = `${trigMode}`;
    }

    visMode();

    divOperator.addEventListener("click", opererTall);
    divErlik.addEventListener("click", doOperation);
    divFunk.addEventListener("click", matteFunk);
    divSpecial.addEventListener("click", specialFunk);

    divTall.addEventListener("click", sjekkTall);
    divAC.addEventListener("click", nullstill);

    function specialFunk(e) {
        const t = e.target;
        if (t.className === "button") {
            const funknavn = t.innerHTML;
            if ("degrad".includes(funknavn)) {
                switch (funknavn) {
                    case "degrad":
                        {
                            if (trigMode === "rad") {
                                trigMode = "deg";
                            } else {
                                trigMode = "rad";
                            }
                            break;
                        }
                }
                visMode();
            } else {
                alert("funksjon " + funknavn + " mangler");
            }
        }
    }

    function matteFunk(e) {
        const t = e.target;
        if (t.className === "button") {
            nyttTall = true;
            const funknavn = t.innerHTML;
            if ("sincostan".includes(funknavn)) {
                let tall = Number(divDisplay.innerHTML);
                if (trigMode === "deg") {
                    tall = Math.PI * tall / 180;
                }
                switch (funknavn) {
                    case "sin":
                        {
                            const resultat = Math.sin(tall);
                            divDisplay.innerHTML = resultat.toFixed(8);
                            break;
                        }
                    case "cos":
                        {
                            const resultat = Math.cos(tall);
                            divDisplay.innerHTML = String(resultat);
                            break;
                        }
                    case "tan":
                        {
                            const resultat = Math.tan(tall);
                            divDisplay.innerHTML = String(resultat);
                            break;
                        }
                }
            } else {
                alert("funksjon " + funknavn + " mangler");
            }
        }
    }

    function doOperation(e) {
        switch (operator) {
            case "+":
                {
                    const svar = minne + Number(divDisplay.innerHTML);
                    divDisplay.innerHTML = String(svar);
                    minne = svar;
                    nyttTall = true;
                    break;
                }
            case "-":
                {
                    const svar = minne - Number(divDisplay.innerHTML);
                    divDisplay.innerHTML = String(svar);
                    minne = svar;
                    nyttTall = true;
                    break;
                }
            case "*":
                {
                    const svar = minne * Number(divDisplay.innerHTML);
                    divDisplay.innerHTML = String(svar);
                    minne = svar;
                    nyttTall = true;
                    break;
                }
            case "/":
                {
                    const svar = minne / Number(divDisplay.innerHTML);
                    divDisplay.innerHTML = String(svar);
                    minne = svar;
                    nyttTall = true;
                    break;
                }
        }
    }

    function opererTall(e) {
        const t = e.target;
        if (t.className === "button") {
            if (operator !== "") {
                doOperation(null);
            }
            operator = t.innerHTML;
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
        if (t.className === "button") {
            const disp = divDisplay.innerHTML;
            if (nyttTall) {
                minne = Number(divDisplay.innerHTML);
                divDisplay.innerHTML = "";
            }
            nyttTall = false;
            const verdi = t.innerHTML;   
            if (verdi === ".") {
                if (disp.includes(".")) {
                    return;
                }
            }
            if (verdi === "-") {  
                if (disp === "0") {
                    return;
                }
                if (disp.includes("-")) {
                    divDisplay.innerHTML = disp.substr(1);
                } else {
                    divDisplay.innerHTML = "-" + disp;
                }
            } else {
                divDisplay.innerHTML += verdi;
            }
        }
    }

    lageKnapper("tall", "789456123-0.".split(""));
    lageKnapper("operator", "+-*/".split(""));
    lageKnapper("funk", "sin,cos,tan".split(","));
    lageKnapper("specials", "degrad".split(","));

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