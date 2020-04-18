const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  const verse = verse.value;
  updateDisplay(verse);
};

function updateDisplay(verse) {
  // Make text equivalent to text file path name
  verse = verseChoose.replace(" ", "");
  verse = verse.toLowerCase();
  let url = verse + '.txt';

  // XHR request
  let request = new XMLHttpRequest();
  // specify request method
  request.open('GET', url);
  // Set response to expext; xhr return 'text' as default
  request.responseType = 'text';
  request.onload = function() {
    poemDisplay.textContent = request.response;
  };
  request.send();
}
