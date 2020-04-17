const btn = document.querySelector('button');
const list = document.querySelector('ul');
const input = document.querySelector('input');

function response() {
  // Store input value
  let value = input.value;
  console.log(value);

// Throw error if...
  // if (value === '') {
  //   // Write a warning and prevent from adding blank slots
  // }

  // Empty string
  input.value = '';

  // Create 3 new elements: li, span, button and store in variables
  let newListItem = document.createElement('li');
  let newSpan = document.createElement('span');
  let newBtn = document.createElement('button');

  newListItem.appendChild(newSpan);
  newListItem.appendChild(newBtn);

  newSpan.textContent = value;
  newBtn.textContent = 'Delete';

  list.appendChild(newListItem);

  newBtn.addEventListener('click', function() {
    // modern browser support method:
    newListItem.remove();
    // older browser support method:
    // list.removeChild(newListItem);
  });

  input.focus();

}

// older browser support:
// btn.onclick = response;
// modern browser support:
btn.addEventListener('click', response);
