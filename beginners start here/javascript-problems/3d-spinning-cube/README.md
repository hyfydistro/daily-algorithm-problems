# Recreating a cube - A 3D spinning cube

Use _three.js_ and the _WebGL API_ to create a spinning 3D cube.

## Prerequisite

* How To Set Up Local Testing Server

1. Install Python 3 (see their website).

2. Open Git Bash (Linux) terminal in directory.

3. Type `python -m http.server 8000` and enter. Open `localhost:8000` in browser.

Note: To close, type `ctrl` + `c`.

## keynotes

* `PerspectiveCamera()`

Takes four arguments.

- The field of view: How wide the area in front of the camera is that should be visible onscreen, in degrees.
- The aspect ratio: Usually, this is the ratio of the scene's width divided by the scene's height. Using another value will distort the scene.
- The near plane: How close to the camera objects can be before we stop rendering them to the screen.
- The far plane: How far away things are from the camera before they are no longer rendered.

The camera's position to be 5 distance units out of the X axis, which is out of the screen towards you, the viewer.

* An `AmbientLight` object is a kind of soft light that lightens the whole scene a bit, like the sun when you are outside. The `SpotLight` object, on the other hand, is a directional beam of ligght, more like a flashlight / torch (or a spotlight, in fact).

## Credits

- _MDN_ - Drawing Graphics
