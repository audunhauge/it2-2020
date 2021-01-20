// @ts-check

class Punkt {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

class Komponent {
  /**
   * @param {Punkt} p1
   * @param {Punkt} p2
   * @param {string} type
   * @param {number} verdi
   */
  constructor(p1,p2, type,verdi) {
    this.p1 = {x:p1.x,y:p1.y};
    this.p2 = {x:p2.x,y:p2.y};
    this.type = type;
    this.verdi = verdi;
  }

  tegnDeg(ctxArk) {
    const {p1,p2} = this;
    switch (this.type) {
      case "resistor": {
        resistor(ctxArk, p1, p2);
      } break;
      case "ledning": { 
        ledning(ctxArk, p1, p2); 
      } break;
      case "spole": { 
        spole(ctxArk, p1, p2); 
      } break;
      case "capacitor": { 
        capacitor(ctxArk, p1, p2); 
      } break;
      case "jord": { 
        jord(ctxArk, p1, p2)
      } break;
      case "plusspol": { 
        //const volt = Number(inpVolt.value);
        plusspol(ctxArk, p1, p2,this.verdi);
      } break;
    }
  }
}

const komponentListe = [];



const π = Math.PI; // kjekk å ha

/**
 * Beregner avstand mellom to punkt a og b
 * @param {{ x: number; y: number; }} a
 * @param {{ x: number; y: number; }} b
 */
function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{ x: any; y: any; }} p
 * @param {number} r
 */
function sirkel(ctx, p, r) {
  // tegner en sirkel
  ctx.beginPath();
  ctx.arc(p.x, p.y, r, 0, 2 * π);
  ctx.stroke();
}

/**
 * Tegn en firkant
 * @param {CanvasRenderingContext2D} ctx
 * @param {{ x: any; y: any; }} p1
 * @param {{ x: any; y: any; }} p2
 */
function firkant(ctx, p1, p2) {
  // tegner en firkant
  const w = p2.x - p1.x;
  const h = p2.y - p1.y;
  ctx.beginPath();
  ctx.strokeRect(p1.x, p1.y, w, h);
  //ctx.stroke();
}

/**
 * Tegn en trekant
 * @param {CanvasRenderingContext2D} ctx
 * @param {{ x: any; y: any; }} p1
 * @param {{ x: any; y: any; }} p2
 */
function trekant(ctx, p1, p2) {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p1.x, p2.y);
  ctx.closePath();
  ctx.stroke();
}

function resistor(ctx, p1, p2) {
  const path = new Path2D(
    `M ${p2.x} ${p2.y} h 20 l 2 5  l 4 -10  l 4 10  l 4 -10  l 4 10  l 4 -10  l 2 5 h 16`
  );
  tegnKomponent(ctx, p1, p2, path);
}

function ledning(ctx, p1, p2) {
  const path = new Path2D(`M ${p2.x} ${p2.y} L ${p1.x} ${p1.y}`);
  ctx.beginPath();
  ctx.stroke(path);
}

function jord(ctx, p1, p2) {
  const path = new Path2D(`M ${p2.x} ${p2.y} 
      h 20 m 0 -15 v 30 m 5 -25 v 20 m 5 -15 v 10
      `);
  tegnKomponent(ctx, p1, p2, path);
}

function plusspol(ctx, p1, p2, volt) {
  const path = new Path2D(`M ${p2.x} ${p2.y} h 20`);
  tegnKomponent(ctx, p1, p2, path);
  ctx.strokeText(`(${volt}V)`, p2.x - 25, p2.y + 3);
  sirkel(ctx,p2,3);
}

function spole(ctx, p1, p2) {
  const path = new Path2D(
    `M ${p2.x} ${p2.y} h 10 t 2 -5 , 4 0 , 4 0, 4 0, 4 0, 4 0, 4 0, 4 0 l 2 5 h 10`
  );
  tegnKomponent(ctx, p1, p2, path);
}

function capacitor(ctx, p1, p2) {
  const path = new Path2D(
    `M ${p2.x} ${p2.y} h 20 m 0 -15 v 30 m 10 0 v -30 m 0 15 h 20`
  );
  tegnKomponent(ctx, p1, p2, path);
}

function tegnKomponent(ctx, p1, p2, path) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const angle = Math.atan2(dy, dx);
  ctx.beginPath();
  ctx.save();
  ctx.translate(p2.x, p2.y);
  ctx.rotate(angle);
  ctx.translate(-p2.x, -p2.y);
  ctx.stroke(path);
  ctx.stroke();
  ctx.restore();
}

const p1 = { x: 1, y: 1 };
const p2 = { x: 1, y: 1 };
let antallPunkt = 0;

/**
 * @param {MouseEvent} e
 */
function registrerPunkt(e) {
  p2.x = p1.x;
  p2.y = p1.y;
  const { offsetX, offsetY } = e;
  p1.x = Math.round(offsetX / 10) * 10;
  p1.y = Math.round(offsetY / 10) * 10;
  antallPunkt++;
  if (antallPunkt === 2) {
    const event = new Event("toPunkt");
    dispatchEvent(event);
    antallPunkt = 0;
  }
}

function tegnRutenett(ctx) {
  ctx.beginPath()
  ctx.strokeStyle = 'rgba(0,0,200,0.1)';
  for (let i=0; i<40; i++) {
    const i10 = 10*i;
    ctx.moveTo(0,i10);
    ctx.lineTo(400,i10);
    ctx.moveTo(i10,0);
    ctx.lineTo(i10,400);
  }
  ctx.stroke()
}

function setup() {
  const lblVolt = document.getElementById("volt");
  const inpVolt = document.querySelector("#volt > input");
  const canvas =
    /** @type {HTMLCanvasElement} */
    (document.getElementById("tegning"));
  const bg =
    /** @type {HTMLCanvasElement} */
    (document.getElementById("bakgrunn"));
  const ctxArk = canvas.getContext("2d");
  // kobling til tegnings-kontekst for canvas ctx = context

  const ctxBG = bg.getContext("2d");
  // tegner på bakgrunn

  tegnRutenett(ctxBG);

  const selType = document.getElementById("type");

  selType.addEventListener("change", visEkstra);

  function visEkstra() {
    const type = selType.value;
    if (type === "plusspol") {
      lblVolt.style.opacity = "1";
    } else {
      lblVolt.style.opacity = "0";
    }
  }

  canvas.addEventListener("click", registrerPunkt);

  addEventListener("toPunkt", tegn);
  function tegn() {
    const type = selType.value;
    const komp = new Komponent(p1,p2,type,12);
    //const inpVolt = document.querySelector("#volt > input");
    komponentListe.push(komp);
    tegnListe();
  }

  function tegnListe() {
    ctxArk.clearRect(0,0,400,400);
    for (let i=0; i< komponentListe.length ; i++) {
      const komp = komponentListe[i];
      komp.tegnDeg(ctxArk);
    }
  }

}
