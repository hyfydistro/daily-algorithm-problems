const btn = document.querySelector('button');
const list = document.querySelector('ul');
const input = document.querySelector('input');

function response() {
  // Store input value
  let value = input.value.toString();
  console.log(value);

// Throw error if...
  if (value === '') {
    // Write a warning and prevent from adding blank slots
  }

  // Empty string
  input.value = '';

  // Create 3 new elements: li, span, button and store in variables
}

btn.addEventListener('click', response);
