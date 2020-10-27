// @ts-check

/*
 * Ny versjon som bruker Promises.allSettled 
 * Slipper da setTimeout for å vente xxx sekunder på at alle
 * bilder er ferdig testa (om de finnes eller ikke)
 */

const $ = (id) => document.getElementById(id);

const alleBilder = [];
const promises = [];

const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", reject);
    img.src = url;
  });

function setup() {
  const divBilder = $("bilder");
  const imglist = [];
  for (let i = 1; i < 100; i += 1) {
    const navn = `media/b${i}.jpg`;
    promises.push(loadImage(navn));
  }
  Promise.allSettled(promises).then((results) =>
    results.forEach((v, i) => {
      if (v.value) {
        const img = v.value;
        const div = document.createElement("div");
        alleBilder.push(div);
        div.style.backgroundImage = `url("${img.src}")`;
        div.style.left = `${250 * (i % 3)}px`;
        div.style.top = `${200 * Math.floor(i / 3)}px`;
        div.addEventListener("click", framvis);
        divBilder.append(div);
      }
    })
  );

  function framvis(e) {
    for (const bilde of alleBilder) {
      bilde.classList.remove("ontop");
    }
    const div = e.target;
    div.classList.remove("animert");
    void div.offsetWidth;
    div.classList.add("animert", "ontop");
  }
}
