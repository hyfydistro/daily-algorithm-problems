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
    newListItem.remove();
    // list.removeChild(newListItem);
  });


}

btn.addEventListener('click', response);
