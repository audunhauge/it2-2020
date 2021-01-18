// @ts-check

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
  
  ctx.stroke()
}

function setup() {
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

  canvas.addEventListener("click", registrerPunkt);

  addEventListener("toPunkt", tegn);
  function tegn() {
    const type = selType.value;
    if (type === "resistor") {
      resistor(ctxArk, p1, p2);
    }
    if (type === "ledning") {
      ledning(ctxArk, p1, p2);
    }
    if (type === "spole") {
      spole(ctxArk, p1, p2);
    }
    if (type === "capacitor") {
      capacitor(ctxArk, p1, p2);
    }
    if (type === "sirkel") {
      const radius = dist(p1, p2);
      sirkel(ctxArk, p1, radius);
    }
    if (type === "firkant") {
      firkant(ctxArk, p1, p2);
    }
    if (type === "trekant") {
      trekant(ctxArk, p1, p2);
    }
  }

  // clearRect(x,y,w,h)
}
