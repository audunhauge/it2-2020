// @ts-check

const $ = (id) => document.getElementById(id);

function setup() {
    const selStyrke = $("styrke");
    const divPropell = $("propell");
    const divHus = $("hus");
    selStyrke.addEventListener("change", visVind);

    function visVind(e) {
        const styrke = selStyrke.value;
        void divPropell.offsetWidth;
        divPropell.className = styrke;
        divHus.className = styrke;
    }
}