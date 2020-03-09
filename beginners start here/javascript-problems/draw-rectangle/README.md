# Draw Rectangle

## Brief

Create a function that draws a rectangle on the provided `<canvas>` (reference variable `canvas`,context available in ctx), based on the five provided input variables:

* `x` - the x coordinate of the rectangle.

* `y` - the y coordinate of the rectangle.

* `width` - the width of the rectangle.

* `height` - the height of the rectangle.

* `color` - the color of the rectangle.

Clear the canvas before drawing. i.e. when the code is updated in the case of the live version, you don't get lots of rectangles drawn on top of one another.

## Keynotes

* HTML canvas `rect()` Method:

The rect() method creates a rectangle.

Use the `stroke()` or the `fill()` method to actually draw the rectangle on the canvas.

**Syntax**:

        context.rect(x, y, width, height);

* To clear drawings, use:

        ctx.clearRect(0, 0, canvas.width, canvas.height);

* `fillStyle` property of HTML canvas

The `fillStyle` property sets or return the color, gradient, or pattern used to fill the drawing.

**Syntax**:

        context.fillStyle = color | gradient | pattern;

* HTML canvas `fillRect()` Method:

The `fillRect()` method draws a "filled" rectangle. The default color of the fill is black.

**Syntax**:

        context.fillRect(x, y, width, height);

## Credits

- _MDN_ - test your skills: FUnctions

- _StackOverflow_ - [How to clear the canvas for redrawing](https://stackoverflow.con/questions/2142535/how-to-clear-the-canvas-for-redrawing)
