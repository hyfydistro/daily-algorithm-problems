const imgThumb = document.querySelector('.thumb');

// event listeners
// mouse
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;
// keyboard
imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;

function showImg() {
  const imgZoom = document.createElement('img');
  imgZoom.setAttribute('class', 'zoom');
  imgZoom.setAttribute('src', imgThumb.getAttribute('src'));

  let widthOffset = imgThumb.x + imgThumb.width + 10;
  imgZoom.style.left = widthOffset + 'px';
  let heightOffset = imgThumb.y;
  imgZoom.style.top = heightOffset + 'px';

  document.body.appendChild(imgZoom);
}

function hideImg() {
  const imgZoom = document.querySelector('.zoom');
  document.body.removeChild(imgZoom);
}
