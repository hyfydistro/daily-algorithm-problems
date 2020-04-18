const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  const verse = verseChoose.value;
  updateDisplay(verse);
};

function updateDisplay(verse) {
  // Make text equivalent to text file path name
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  let url = verse + '.txt';

  // Either option (1) or (2) will work. Comment one and uncomment the other.
  // (1) Via XHR
  // // XHR request
  // let request = new XMLHttpRequest();
  // // specify request method
  // request.open('GET', url);
  // // Set response to expext; xhr return 'text' as default
  // request.responseType = 'text';
  // request.onload = function() {
  //   poemDisplay.textContent = request.response;
  // };
  // request.send();

  // (2) Via Fetch
  fetch(url)
  .then(function(response) {
    response.text()
    .then(function(text) {
      poemDisplay.textContent = text;
    });
  });
}

// If it doesn't show, use the following syntax; comment above.
// updateDisplay('Verse 1');
// verseChoose.value = 'Verse 1';
