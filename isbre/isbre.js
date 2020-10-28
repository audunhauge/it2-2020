// @ts-check

function setup() {
    const lydfil = document.getElementById("bekkelyd");
    const divIsbre = document.getElementById("isbre");
    const btnSpill = document.querySelector("button");
    btnSpill.addEventListener("click", spillAnimasjon);

    function spillAnimasjon() {
        divIsbre.classList.remove("aktiv");
        void divIsbre.offsetWidth;
        lydfil.play();
        divIsbre.classList.add("aktiv");
    }
}