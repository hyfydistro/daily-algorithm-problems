# A Simple Drawing Application

A drawing application with minimalistic features.

- Keep track of the mouse's X and Y coordinates and whether it is being clicked or not with three variables: `curX`, `curY` and `pressed`.
- When the mouse moves, we fire a function set as the `onmousemove` event handler, which captures the current X and Y values. Also, use `onmousedown` and `onmouseup` event handlers to change the value of `pressed` to `true` when the mouse button is pressed, and back to `false` when it is released.
- When the "Clear Canvas" button is pressed, we run a simple function that clears the whole canvas back to black.
- For the drawing loop, if pressed is `true`, we draw a circle with a fill style equal to the value in the color picker, and a radius equal to the value set in the range input.

## Keynotes

* `e.pageX` and `e.pageY`

`MouseEvent.pageX`, a Web API.


Uses an event listener to register the function, such as, "updateDisplay()" as the event handler. This refers to the `mousemove`, `mouseenter`, etc.

`pageX` / `pageY` gives the coordinates relative to the <html? element in CSS pixels.

* `e.clientX` and `e.clientY`

`clientX` / `clientY` gives the coordinates relative to the viewport in CSS pixels.

`screenX` / `screenY` gives the coordinates relative to the screen in device pixels.

* The `<input>` `range` and `color` types are supported fairly well across browsers, with the exception of Internet Explorer versions less than 10. Also Safari doesn't yet support `color`. If your browser doesn't support these inputs, they will fall back to simple text fields and you'll just have to enter valid color / number values yourself.

## Credits

- _MDN_ - Drawing Graphics
