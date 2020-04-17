const div = document.querySelector('div');
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

div.style.width = winWidth + 'px';
div.style.height = winHeight + 'px';

function changeSize() {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  div.style.width = winWidth + 'px';
  div.style.height = winHeight + 'px';
}

// For older browsers
// window.onresize = changeSize;

// For modern browsers
window.addEventListener('resize', changeSize);
