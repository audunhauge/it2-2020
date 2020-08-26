// @ts-check

function setup() {
    let btnRoll = document.getElementById("roll");
    let terninger = document.querySelectorAll("dice-roll");
   

    btnRoll.addEventListener("click", rollDice);

    function rollDice() {
       for (let t of terninger)   {
           t.setAttribute("roll","yes");
       }
       
    }
}
