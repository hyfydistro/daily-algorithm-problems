# Bouncing Balls

**Technologies in use:** Canvas API, requestAnimationFrame API.

## Brief

Draw the canvas, Model a ball, ...

**properties**

* Modelling the Ball - the horizontal `x` and vertical `y` coordinates where the ball starts on the screen , can range between 0 (top left hand corner) to the width and height of the browser viewport (bottom right hand corner).

* horizontal `velX` and vertical `velY` velocity. In real terms these values are regularly added to the  `x` and `y` coordinate values when we animate the balls - to move them by this much on each frame.

* Each ball gets a `size`, its radius in pixels.

## Keynotes

* To equal the width and height of the browser viewport, the area that the webpage appears on, can be obtained from `Window.innerWidth` and `Window.innerHeight` properties.

* `ctx` is the object that directly represents the drawing area of the canvas and allows us to draw 2D shapes on it.

* Use `beginPath()` to state that we want to draw a shape on the paper.

* Use `fillStyle` to define what color the shape to be - this is set in our ball's `color`.

* Use `arc()` method to trace an arc shape on the paper. It's parameters are:

  - The `x` and `y` position of the arc's center.

  - The radius of the arc; the ball's `size` property.

  - The last two parameters specify the number of degrees around the circle that the arc is drawn between. Here we specify `0` degrees, and `2 * PI`, which is the equivalent of 360 degrees in radians (specify in radians only). If you had specified only `1 * PI` this results in a semi-circle (180 degrees).

* `fill()` method, basically states "finish drawing the path we started with `beginPath()`, and fill the area it takes up with the color we specified earlier in `fillStyle`."
