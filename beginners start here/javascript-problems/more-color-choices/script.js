const select = document.querySelector('select');
const html = document.querySelector('html');

select.onchange = function() {
  const choice = select.value;

  switch (choice) {
    case 'black':
      update('black', 'white');
      break
    case 'white':
      update('white', 'black');
      break;
    case 'yellow':
      update('yellow', 'purple');
      break;
    case 'purple':
      update('purple', 'pink');
      break;
    case 'psychedelic':
      update('red', 'green');
      break;
  }
}

function update (bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
