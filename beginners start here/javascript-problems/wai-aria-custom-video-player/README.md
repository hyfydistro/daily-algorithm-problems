# Custom Video Player (WAI-ARIA included)

A custom video player created with accessibility aid.

## Keynotes

* Before moving onto creating our button functionality, let's remove the native controls so they don't get in the way of our custom controls. Add the following, again at the bottom of your JavaScript:

        player.removeAttribute('controls');

Doing it this way round rather than just not including the controls attribute in the first place has the advantage that if our JavaScript fails for any reason, the user still has some controls available.

* `HTMLMediaElement.currentTime`

A double-precision floating-point value indicating the current playback time in seconds. If the media has not started to play and has not been seek, this value is the media's initial playback time. Setting this value seeks the media to the new time. The time is specified relative to the media's timeline.

* `HTMLMediaElement.paused` [Read only]

Returns a `Boolean` that indicates whether the media element is paused.

## Developer's Notes

We could use some WAI-ARIA attribute in the html semantics...?

## Further Reading

- [Audio and video delivery](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery)

- [Video player styling basics](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics)

- [Creating a cross-browser video player](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player)

## Credits

- _MDN_ - [Media accessible](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia)

- _MDN_ - [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

- _MDN_ - [A More Accessible HTML5 <video> Player](https://dev.opera.com/articles/more-accessible-html5-video-player/)

- _W3C_ - [Media Alt Technologies](https://www.w3.org/WAI/PF/HTML/wiki/Media_Alt_Technologies)
