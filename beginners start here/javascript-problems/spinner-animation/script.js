const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
// Define the start time
if (!startTime) {
  startTime = timestamp;
}
// Set the `rotateCount` to a valua to rotate the spinner by
// (the current timestamp, take the starting timestamp,
// divided by three so it doesn't go too fast)
rotateCount = (timestamp - startTime) / 3;

// This checks to see if the value of `rotateCount` is above 359 (e.g. 360, a full circl).
// If so, it sets the value to its modulo 360
// (i.e. the remainder left over when the value is divided by 360)
// so the circle animation can continue uninterrupted, at a sensible, low value.
if (rotateCount > 359) {
  rotateCount %= 360;
}

// To rotate the Spinner
spinner.style.transform = `rotate(${rotateCount}deg)`;

// This starts the animation off, constantly running the draw() function at
// a rate as near 60 FPS as possible.
rAF = requestAnimationFrame(draw);
}

draw();
