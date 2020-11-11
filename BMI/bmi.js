// @ts-check

function setup() {
    // const divMain = document.getElementById("main");
    const inpVekt = (document.getElementById("vekt"));
    const inpHoyde = (document.getElementById("hoyde"));
    const outBMI = (document.getElementById("bmi"));

    const btnberegn = document.getElementById("beregn");
    btnberegn.addEventListener("click", beregnBMI);

    function beregnBMI() {
        // @ts-ignore  
        const vekt = Number(inpVekt.value);
        const hoyde = Number(inpHoyde.value) / 100;

        const bmi = vekt / (hoyde ** 2);



        outBMI.value = bmi.toFixed(1);
    }

}