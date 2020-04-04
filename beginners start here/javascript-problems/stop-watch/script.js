// Define a counter vairable for the number fof seconds and set it to zero.
let secondCount = 0;

// Define a global to store the interval when it is active
let stopWatch;

// Store a reference to the display paragraph in a variable
let displayOutput = document.querySelector('.output');

// Function to calculate the current hours, minutes, and seconds, and display the count
function displayCount() {
  // calculate current hours, minutes, and seconds
  let hours = Math.floor(secondCount/3600);
  let minutes = Math.floor((secondCount % 3600)/ 60);
  let seconds = Math.floor(secondCount % 60);

  // display a leading zero if the values ar eless than ten

  timeString = hours.toString().padStart(2, '0') + ':' +
                   minutes.toString().padStart(2, '0') + ':' +
                   seconds.toString().padStart(2, '0');

  // Write the current stopwatch display time into the display paragraph
  displayOutput.textContent = timeString;

  // Increment the second counter by one
  secondCount++;
}

// Store references to the buttons in constants
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

// When the start button is pressed, start running displayCount() once per second using setInterval()
startBtn.addEventListener('click', () => {
  stopWatch = setInterval(displayCount, 1000);
  startBtn.disabled = true;

  // style for disabled button
  startBtn.classList.remove('is-active');
  startBtn.classList.add('is-disabled');
});

// Wehn the stop button is pressed, clear the interval to stop the count
pauseBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;

  // Remove style for disabled button
  startBtn.classList.add('is-active');
  startBtn.classList.remove('is-disabled');
});

// When the button is pressed, set the counter back to zero, then immediately update the display
resetBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;

  // reset count
  secondCount = 0;

  // Remove style for disabled button
  startBtn.classList.add('is-active');
  startBtn.classList.remove('is-disabled');

  displayCount();
});

// Run displayCount() once as soon as the page loads so the clock is displayed
displayCount();
