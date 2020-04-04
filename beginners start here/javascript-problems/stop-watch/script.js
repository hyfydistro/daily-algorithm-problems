function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector('.clock').textContent = time;
}

displayTime();
const createClock = setInterval(displayTime, 1000);

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

let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let resetBtn = document.querySelector('#reset');
let output = document.querySelector('.output');

let startTime,
endTime,
givenSeconds,
hours,
minutes,
seconds,
timeString;



// Start button
startBtn.addEventListener('click', function start() {
  // begin timer
  startTime = Date.now();
  // Disable button unless `pauseBtn` is clicked, continue
  // Disablle button unless 'resetBtn' is clicked, clear
  startBtn.disabled = true;
  //style
  startBtn.classList.remove('is-active');
  startBtn.classList.add('is-disabled');
})

// Pause button
pauseBtn.addEventListener('click', function pause() {
  endTime = Date.now();
  let result =  endTime- startTime;
  console.log(result);

  givenSeconds = result;

  // Conversion
  // 1 hr = 3600 seconds
  // Find the amount hours, rouded to the nearest whole number
  hours = Math.floor(givenSeconds / 3600);
  // 1 hr = 60 minutes
  // FInd the remainder minutes
  minutes = Math.floor((givenSeconds - (hours * 3600)) / 60);
  // Find the remainder seconds
  seconds = givenSeconds - (hours * 3600) - (minutes * 60);

  timeString = hours.toString().padStart(2, '0') + ':' +
                   minutes.toString().padStart(2, '0') + ':' +
                   seconds.toString().padStart(2, '0');
  output.textContent = timeString;
  // make startBtn available again
  startBtn.disabled = false;
  // style
  startBtn.classList.add('is-active');
  startBtn.classList.remove('is-disabled');


})

// Reset button
resetBtn.addEventListener('click', function reset() {
  
})
