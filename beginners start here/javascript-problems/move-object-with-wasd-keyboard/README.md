# Move object with "WASD" keyboard

\#keyboards-event-listener

## Brief

Move the circle created in a canvas and allow it to move by "WASD" keyboards as controllers.

* The circle is drawn with the function drawCircle(), which takes the following parameters as inputs:

* `x` - the x coordinate of the circle.

* `y` - the y coordinate of the circle.

* `size` - the radius of the circle.

## Keynotes

* `ctx.arc([required 5 arguments])`

* Process

1. Start by drawing your shape. e.g. Define the circle with a function called `drawCircle` that draws the shape at a fixed position in the canvas.

2. Find out what positions your shape.

3. ...

* Dealing with the keyboards

i. Listen for events your keyboard fires.

ii. Inside the event handler, accessing the `KeyboardEvent`'s `keyCode` property.

iii. Handling the cases when the **left**, **right**, **up**, and **down** arrow keys are pressed.

There are several ways of doing this, but we are going to use a familiar (but less-than-ideal approach).

Depending which key is pressed, the stored x and y variable (horizontal axis and vertical axis, respectively) will determine their movement via increments/ decrements.

* Prevent Default Keyboard Behaviour

When relying on the keyboard, the thing you need to keep in mind is that everything from your browser to your operating system is listening to the keyboard as well. Strange an unexpected things happen your keyboard is used.

e.g. The arrow keys used to scroll your page up and down (and occasionally left and right)

Solution:

In your function (aka the event handler), simply call to `preventDefault`.

* Improved Keyhandling Logic

_Press and hold_ the up and right arrow at the same time. What you would expect to see is your object moving diagonally. However, with the `switch` statement given, the object moves in only ONE direction - either right or up. The reason being, using a `switch` statement.

There is nothing wrong with this general approach, for `switch` statement are less verbose than `if`/`else-if` statements for checking which condition happens to equate to 'true'. For many general cases, this is fine. How often arevpeople going to hold down multiple keys at the same time? As it turns out, for interactive/game-ey things that we are doing, pressing multiple keys will be a common occurrence. Pressing the Up and Right arrows on the keyboard at the same time is equivalent of pushing a joystick diagonally.

Solution:

Check for which key was pressed. Replace existing `addEventListener` call and the function to move the object.

        window.addEventListener("keydown", keysPressed, false);
        window.addEventListener("keyup", keysReleased, false);

        var keys = [];

        function keysPressed(e) {
          // store an entry for every key keysPressed
          keys[e.keyCode] = true;

          // left
          if (keys[37]) {
            x -= 2;
          }

          // Right
          if (keys[39]) {
            x += 2;
          }

          // down
          if (keys[38]) {
            y += 2;
          }

          // up
          if (keys[40]) {
            y -= 2;
          }

          e.preventDefault();

          drawCircle();
        }

        function keysReleased(e) {
          // mark keys that were released
          keys[e.keyCode] = false;
        }

What we've done is simply take our exisintg code and combine it with the 'Detecting Multiple Presses code'. This change ensures that we can press multiple keys and get the desired Behaviour that we want.

* There's a difference between `keydown` or `keyup` and `keypress`. You need to use the `keydown` or `keyup`.

But, note, some key codes vary from operating system to operating system, or even regional keyboard layout to regional keyboard layout.

* Word for Browser Compatibility

Event.KeyCode is deprecated and inconsistent across brwosers, use `Event.key` instead (if available). If not, your best bet would be to use a library us as _Keypress_. JQuery will also do.



## Credits

- _MDN_ - Test your skills: Events

- _Kirupa_ - [Moving shapes canvas keyboard](https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm)

- _StackOverflow_ - [Detect keyCode issue wrong value](https://stackoverflow.com/questions/41302136/detect-keycode-issue-wrong-value)
