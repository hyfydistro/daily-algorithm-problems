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

  if (rotateCount > 359) {
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

// start button functionality
btn.addEventListener('click', start);

function start() {
  draw();
  spinnerContainer.style.display = 'block';
  btn.style.display = 'none';
  setTimeout(setEndgame, random(5000, 10000));
  // Noticed `setTimeout` is not stored in a varaible.
  // This is fine as long as don't need to clear your timeout at any point.
}

// Start: The spinner is shown and the players are made to wait a random
// amount of time before they are asked to press their button.
function setEndgame()  {
  cancelAnimationFrame(rAF);
  spinnerContainer.style.display = 'none';
  result.style.display = 'block';
  result.textContent = 'PLAYERS GO!!';

  document.addEventListener('keydown', keyHandler);

  function keyHandler(e) {
    console.log(e.key);
    if(e.key === 'a') {
      result.textContent = 'Player 1 won!!';
    } else if (e.key === 'l') {
      result.textContent = 'Player 2 won!!';
    }
    // Note: ONLY lowercase keys are accepted

    document.removeEventListener('keydown', keyHandler);
    setTimeout(reset, 5000);
  }
}
