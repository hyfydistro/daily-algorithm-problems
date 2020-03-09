let buttonBar = document.querySelector('.button-bar');
let section = document.querySelector('section');
let body = document.querySelector('body');

// Supports IE
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

buttonBar.addEventListener('click', function(e) {
  // IE support:
  // let target = getEventTarget(e);

  // algorithm:
  // get target element
  // get targeted element's color value
  // set color value to background

  let value = e.target.getAttribute('data-color');
  // body.style.backgroundColor = value;
  buttonBar.style.backgroundColor = value;

}, false);
