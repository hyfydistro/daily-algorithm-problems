# Bouncing Balls

**Technologies in use:** Canvas API, requestAnimationFrame API.

## Brief

Draw the canvas, Model a ball, ...

**properties**

* Modelling the Ball - the horizontal `x` and vertical `y` coordinates where the ball starts on the screen , can range between 0 (top left hand corner) to the width and height of the browser viewport (bottom right hand corner).

* horizontal `velX` and vertical `velY` velocity. In real terms these values are regularly added to the  `x` and `y` coordinate values when we animate the balls - to move them by this much on each frame.

* Each ball gets a `size`, its radius in pixels.

## Keynotes

* `ctx` is the object that directly represents the drawing area of the canvas and allows us to draw 2D shapes on it.

* To equal the width and height of the browser viewport, the area that the webpage appears on, can be obtained from `Window.innerWidth` and `Window.innerHeight` properties.
