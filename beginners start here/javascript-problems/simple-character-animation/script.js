const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

// Position origin to the middle of the canvas
ctx.translate(width/2, height/2);

// Reference image file
let image = new Image();
image.src = 'walk-right.png';
image.onload = draw;

// variables to keep track of the position of the sprite
// to be drawn on the screen, and the sprite number we want to display
let sprite = 0;
let posX = 0;

function draw() {
  ctx.fillRect(-(width/2), -(height/2), width, height);
  ctx.drawImage(image, (sprite * 102), 0, 102, 148, 0 + posX, -74, 102, 148);

  // Check whether the sprite value can be divided by 13 with no remaineder.
  // If so, we move on to the next sprite by incrementing 'sprite'.
  // i.e. the sprite is only updated every 13th frame, or rouchyly about 5 frames a second.
  // We are deliberatly slowing down the frame rate because we only have 6 sprites
  // to work with. Otherwise, our chracter would move way too fast!
  if (posX % 13 === 0) {
    if (sprite === 5) {
      sprite = 0;
    } else {
      sprite++;
    }
  }

  // Work out how to change the posX value on each frame
  if (posX > width/2) {
    newStartPos = -((width/2) + 102);
    posX = Math.ceil(newStartPos / 13) * 13;
    console.log(posX);
  } else {
    posX += 2;
  }

  window.requestAnimationFrame(draw);
}
