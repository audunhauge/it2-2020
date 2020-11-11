// @ts-check

function setup() {
    // const divMain = document.getElementById("main");
    const inpFarge = (document.getElementById("farge"));
    const divHex = document.getElementById("hex");
    const divFargevis = document.getElementById("hex")
    const btnberegn = document.getElementById("beregn");
    btnberegn.addEventListener("click", beregnFarge);

    function beregnFarge() {
        // @ts-ignore  
        divFargevis.classList.remove("rød","grønn","blå");
        const farge = inpFarge.value;
        if (farge === "ekkel") {
            alert("Skriv en rimelig farge!");
            return;
        }
        if (farge === "rød") {
            divHex.innerHTML = "0xff0000";
            divFargevis.classList.add("rød");
        } 
        if(farge === "grønn") {
            divHex.innerHTML = "0x00ff00";
            divFargevis.classList.add("grønn");
        } 
        if(farge === "blå") {
            divHex.innerHTML = "0x0000ff";
            divFargevis.classList.add("blå");
        } 
    }
    
}