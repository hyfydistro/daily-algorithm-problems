// TODO:
// 1. Create Start button
// -
// - display as hours, minutes and seconds
//    - IF less than 0, as a decimal point, use a leading zero
//    e.g. 0.90 s; 0.25 s

// 2. Create Stop button
// - To pause, you ought to clear the interval, display time, and set counter to 0

// 3. Create Reset button
// -You ought to disable the start button after pressing it once,
//  and enable it again after you've stopped/ reset it.


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
  let seconds = Math.floor(second % 60);

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
  stopWatch = setInterval(display, 1000);
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
  secondCount = 0;
  displayCount();
});

// Run displayCount() once as soon as the page loads so the clock is displayed
displayCount();
