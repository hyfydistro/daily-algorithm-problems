# Bouncing Balls

**Technologies in use:** Canvas API, requestAnimationFrame API.

## Brief

Draw the canvas, Model a ball, ...

**properties**

* Modelling the Ball - the horizontal `x` and vertical `y` coordinates where the ball starts on the screen , can range between 0 (top left hand corner) to the width and height of the browser viewport (bottom right hand corner).

* horizontal `velX` and vertical `velY` velocity. In real terms these values are regularly added to the  `x` and `y` coordinate values when we animate the balls - to move them by this much on each frame.

* Each ball gets a `size`, its radius in pixels.

* After drawing the ball in position, we need to move the ball. An `update()` function is needed. Write an `update()` method to the `Ball()`'s `prototype`.

The first four parts of the function (If-statements) check whether the ball has reached the edge of the canvas. If it has, we reverse the polarity of the relevant velocity to make the ball travel in the opposite direction.

e.g. If the ball was travelling upwards (positive `velY`), then the vertical velocity is changed so that it starts to travel downwards instead (negative `velY`).

In the four cases, we are checking to see:

  - If the `x` coordinate is greater than the width of the canvas; the ball going off the right edge.

  - If the `x` coordinate is smaller than `0`; the ball is going off the left edge.

  - If the `y` coordinate is greater than the height of the canvas; the ball is going off the bottom edge.

  - If the `y` coordinate is smaller than `0`; the ball is going off the top edge.

The last two lines add the `velX` value to the `x` coordinate, and the `velY` value to the `y` coordinate - the ball is in effect, it is moved each time this method is called.

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

* Mathematical operations similar to Maths in general

        let num1 = -1; // -1
        let num2 = -num; // 1
