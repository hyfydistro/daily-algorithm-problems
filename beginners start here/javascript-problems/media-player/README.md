# Media Player

\#HTMLMediaElement API

A simple media player.

## Keynotes

* Icon Fonts are beneficial for many reasons. They cut down on HTTP requests because you don't need to download those icons as image files, great scalability, and the fact that you can use text properties to style them - like `color` and `text-shadow`.

* `media.addEventListener('ended', stopMedia);`

To stop the media when it finishes playing, use the `ended` event listener. It listens when the media finish.

* There is no `stop()` method on the _HTMLMediaElement API_. The equivalent is to `pause()` the video, and set its `currentTime` property to 0. Setting `currentTime` to a value (in seconds) immediately jumps the media to that position.

* Seeking back and forth: There are many ways that you can implement rewind and fas forward functionality.

## Improvability / Enhancing

+ Add an hour display timer.

+ Make the features available for `<audio>` aswell.

+ Turn the timer inner `<div>` into a true seek bar / scrobbler. i.e. when you click somewhere in the bar, it jumps to the realtive position in the video playback.

Hint: Find out the X and Y values of the element's left / right and top / bottom sides via the `getBoundingClientRect()` method, and you can find the coordinates of a mouse click via the event object of the click event, called on the `Document` object.

e.g.

        document.onclick = function(e) {
          console.log(e.x) + ',' + console.log(e.y);
        }

## Credits

- _MDN_ - Video and Audio APIs
