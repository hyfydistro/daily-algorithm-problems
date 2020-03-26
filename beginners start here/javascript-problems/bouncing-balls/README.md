# Bouncing Balls

**Technologies in use:** Canvas API, requestAnimationFrame API.

## Brief

Draw the canvas, Model a ball, ...

**Properties**

* Modelling the Ball - the horizontal `x` and vertical `y` coordinates where the ball starts on the screen , can range between 0 (top left hand corner) to the width and height of the browser viewport (bottom right hand corner).

* horizontal `velX` and vertical `velY` velocity. In real terms these values are regularly added to the  `x` and `y` coordinate values when we animate the balls - to move them by this much on each frame.

* Each ball gets a `size`, its radius in pixels.

**Methods**

* After drawing the ball in position, we need to move the ball. An `update()` function is needed. Write an `update()` method to the `Ball()`'s `prototype`.

The first four parts of the function (If-statements) check whether the ball has reached the edge of the canvas. If it has, we reverse the polarity of the relevant velocity to make the ball travel in the opposite direction.

e.g. If the ball was travelling upwards (positive `velY`), then the vertical velocity is changed so that it starts to travel downwards instead (negative `velY`).

In the four cases, we are checking to see:

  - If the `x` coordinate is greater than the width of the canvas; the ball going off the right edge.

  - If the `x` coordinate is smaller than `0`; the ball is going off the left edge.

  - If the `y` coordinate is greater than the height of the canvas; the ball is going off the bottom edge.

  - If the `y` coordinate is smaller than `0`; the ball is going off the top edge.

The last two lines add the `velX` value to the `x` coordinate, and the `velY` value to the `y` coordinate - the ball is in effect, it is moved each time this method is called.


**Animating**

Managing Storage for constructor `Ball`'s instances.

The `while` loop creates a new instance of our `Ball()` using random values generated with out random() function, then using `push()` to store onto the end of our `balls` array. It is under the constraint that the number of balls should be no more than 25. i.e. When we have 25 balls on screen, no more balls will appear. This is editable; you can try varying the number in `balls.lenght < 25` to get more or fewer balls on screen. Depending on how much processing power your computer / browser has.

* `loop()` function

  - Sets the canvas fill to semi-transparent black, draws a rectangle of the color across the whole width and height of the canvas, using `fillRect()` (the four parameters provide a start coordinate, and a width and height for the rectangle drawn).

  This serves to cover up the previous frame's drawing before the next one next one is drawn. If you don't do this, you'll just see snakes worming their way around the canvas instead of balls moving!

  The color of the fill is set to semi-transparent, `rgb(0, 0, 0, 0.25)`, to allow the previous few frames to shine through slightly, producing the little trails behind the balls as they move. If you changed 0.25 to 1, you won't see them mat all any more.

  - loops through all the balls n the `balls` array, and runs each ball's `draw()` and `update()` function to draw each one on the screen, then do the necessary updates to posiotn and velocity in time for the next frame.

  - Runs the function again using the `requestAnimationFrame()` method. When this method is repeatedly run and passed the same function name, it runs that function a set number of times per second to create a smooth animation. This is done recursively, which means that the function is calling itself every time it runs, so it runs over and over again.

Call the function once to get the animation started :

        loop();

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

* All programs that animate things generally involve an animation loop, which serves to update the information in the program and then render the resulting view on each frame of the animation. This is the basis for most games and other such programs.
