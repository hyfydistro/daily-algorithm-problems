# Highlight on Mouse event

Either on mouse or keyboard, the interaction with the thumbnail will highlight it.


## Keynotes

* The first two lines run the functions when the mouse pointer hovers over and stops hovering over the thumbnail, respectively. This won't allow us to access the zoomed view by keyboard though — to allow that, we've included the last two lines, which run the functions when the image is focused and blurred (when focus stops). This can be done by tabbing over the image, because we've included tabindex="0" on it.

        imgThumb.onmouseover = showImg;
        imgThumb.onmouseout = hideImg;

        imgThumb.onfocus = showImg;
        imgThumb.onblur = hideImg;

* The click event sounds mouse-dependent, but most browsers will activate onclick event handlers after Enter / Run is pressed on a link or form element that has focus, or when such an element is tapped on a touchscreen device. This doesn’t work by default however when you allow a non-default-focusable event to have focus using tabindex—in such cases you need to detect specifically when the exact key is pressed.

## Credits

- _MDN_ [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)
