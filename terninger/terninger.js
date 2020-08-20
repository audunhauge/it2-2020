// @ts-check

function setup() {
    let terning = 1;
    let btnRoll = document.getElementById("roll");
    let divSpill = document.getElementById("spill");

    btnRoll.addEventListener("click", rollDice);

    function rollDice() {
        terning = Math.trunc(Math.random() * 6) + 1;
        divSpill.innerHTML = String(terning);
    }
}
