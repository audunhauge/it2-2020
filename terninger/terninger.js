// @ts-check

function setup() {
    let btnRoll = document.getElementById("roll");
    let divT1 = document.getElementById("t1");

    btnRoll.addEventListener("click", rollDice);

    function rollDice() {
        let terning = Math.trunc(Math.random() * 6) + 1;
        divT1.className = `dice d${terning}`;
        divT1.innerHTML = String(terning);
    }
}
