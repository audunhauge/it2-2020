// @ts-check

function setup() {
  let ctx = document.getElementById("tegning").getContext("2d");
  // kobling til tegnings-kontekst for canvas ctx = context
  const π = Math.PI; // kjekk å ha

  ctx.beginPath();
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.arc(100, 100, 30, 0, 2 * π);
  ctx.stroke();
  // tegner en sirkel
}
