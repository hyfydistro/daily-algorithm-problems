let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 50;
let y = 60;
let width = 100;
let height = 75;
let color = 'blue';

// Add your code here

function drawRectangle(x, y, width, height, color) {
  // 1. clear canvas for every refresh
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // (opt.) clear transformed coordinates
  // Use identity matrix while clearing the canvas
  // ctx.setTransform(1, 0, 0, 1, 0, 0);
  // (opt.) Restore the transform
  // ctx.restore();

  // Draw rectangle
  // ctx.beginPath();
  // ctx.rect(x, y, width, height);
  // ctx.stroke();

  // Create a colored rectangle
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawRectangle(x, y, width, height, color);

const section = document.querySelector('section');
