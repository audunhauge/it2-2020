// @ts-check

function setup() {
    const lydfil = document.getElementById("carsound");
    const divBil = document.getElementById("bil");
    const btnSpill = document.querySelector("button");
    btnSpill.addEventListener("click", playSound);

    function playSound() {
        divBil.classList.remove("aktiv");
        void divBil.offsetWidth;
        lydfil.play();
        divBil.classList.add("aktiv");
    }
}