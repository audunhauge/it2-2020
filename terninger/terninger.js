// @ts-check

function setup() {
    let btnRoll = document.getElementById("roll");
    let terninger = document.querySelectorAll("dice-roll");
    let antall = 0;

    btnRoll.addEventListener("click", () => { antall=0; rollDice() });

    function rollDice() {
        let sum;
        sum = 0;
        antall++;
        for (let t of terninger) {
            t.setAttribute("roll", "yes");
        }



    }
}
