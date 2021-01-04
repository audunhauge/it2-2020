// @ts-check

function setup() {
  let ctx = document.getElementById("tegning").getContext("2d");
  // kobling til tegnings-kontekst for canvas ctx = context
  const π = Math.PI; // kjekk å ha

  ctx.beginPath();
  ctx.strokeStyle = "green"
  ctx.fillStyle = "blue";
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.arc(100, 100, 30, 0, 2 * π);
  ctx.stroke();
  // tegner en sirkel

  // tegner en firkant
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);

  // tegner en trekant
  ctx.beginPath();
  ctx.moveTo(275, 250);
  ctx.lineTo(300, 275);
  ctx.lineTo(300, 225);
  ctx.fill();

  // cursor position javascript
  /*
  var cX = event.clientX;
  var sX = event.screenX;
  var cY = event.clientY;
  var sY = event.screenY;
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
  */


}
