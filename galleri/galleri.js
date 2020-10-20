// @ts-check

const $ = (id) => document.getElementById(id);


const mineBilder = [];


function setup() {
    const divBilder = $("bilder");
    for (let i = 1; i < 5; i += 1) {
        const div = document.createElement("div");
        divBilder.append(div);
        div.style.backgroundImage = `url("media/b${i}.jpg")`;
        div.style.left = `${  250 * ((i - 1) % 3)  }px`;
        div.style.top = `${200 * Math.floor((i-1) / 3)}px`;
        div.addEventListener("click", framvis);
    }

    function framvis(e) {
        const div = e.target;
        div.classList.add("animert");

    }

}

