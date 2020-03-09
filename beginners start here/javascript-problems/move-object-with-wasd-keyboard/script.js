let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  // clear canvas
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw and color circle
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// General approach
// window.addEventListener("keydown", moveObj, false);
//
// function moveObj (e) {
//   switch(e.keyCode) {
//     case 65: // "A" / left key pressed
//     x -= 2;
//     break;
//     case 83: // "S" / down key pressed
//     y += 2;
//     break;
//     case 68: // "D" / right key pressed
//     x += 2;
//     break;
//     case 87: // "W" / up key pressed
//     y -= 2;
//     break;
//   }
//   e.preventDefault();
//
//   drawCircle(x, y, size);
//
// }

// Recent Update for improvability
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

var keys = [];

function keysPressed(e) {
  // store an entry for every key keysPressed
  keys[e.keyCode] = true;

  // left
  if (keys[65]) {
    x -= 2;
  }

  // Right
  if (keys[68]) {
    x += 2;
  }

  // down
  if (keys[83]) {
    y += 2;
  }

  // up
  if (keys[87]) {
    y -= 2;
  }

  e.preventDefault();

drawCircle(x, y, size);
}

function keysReleased(e) {
  // mark keys that were released
  keys[e.keyCode] = false;
}
