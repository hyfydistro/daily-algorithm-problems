const spinner = document.querySelector('.spinner p');
const spinnerContainer = document.querySelector('.spinner');
let rotateCount = 0;
let startTime = null;
let rAF;
const btn = document.querySelector('button');
const result = document.querySelector('.result');

function random(min, max) {
  let num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;

  if (rotate > 359) {
    rotateCount %= 360;
  }

  spinner.style.transform = `rotate(${rotateCount}deg)`;

  rAF = requestAnimationFrame(draw);
}

// Initial state of the app
result.style.display = 'none';
spinnerContainer.style.display = 'none';

// sets teh app back to the original state required to start the game again after it has been played.
function reset() {
  btn.style.display = 'block';
  result.textContent = '';
  result.style.display = 'none';
}
