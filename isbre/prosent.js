// @ts-check

function setup() {
    const inpAar1 = document.getElementById("aar1");
    const inpAar2 = document.getElementById("aar2");
    const divResultat = document.getElementById("resultat");
    const btnBeregn = document.querySelector("button");
    btnBeregn.addEventListener("click", beregnprosent);

    function beregnprosent() {
        const aar1 = Number(inpAar1.value);
        const aar2 = Number(inpAar2.value);
        // i oppgaven er det spesifisert en økning 
        // hva skjer dersom nedgang ? ignorerer foreløpig
        const diff = aar2 - aar1;
        const prosent = (diff / aar1) * 100;
        divResultat.innerHTML = `Økningen er på  ${prosent.toFixed(2)} %`;
    }
}