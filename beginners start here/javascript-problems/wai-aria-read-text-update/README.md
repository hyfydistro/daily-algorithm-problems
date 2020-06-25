# Read Text Update (WAI-ARIA)

VoiceOver will read new text updates.

## Prerequisite

* How To Set Up Local Testing Server

1. Install Python 3 (see their website).

2. Open Git Bash (Linux) terminal in directory.

3. Type `python -m http.server 8000` and enter. Open `localhost:8000` in browser.

Note: To close, type `ctrl` + `c`.

## Keynotes

* `aria-live`

WAI-ARIA fortunately provides a useful mechanism to provide these alerts—the aria-live property. Applying this to an element causes screen readers to read out the content that is updated. How urgently the content it read out depends on the attribute value:

- off: The deault. Updates should not be announced.
- polite: Updates should be announced only if the user is idle.
- assertive: Updates should be announced to the user as soon as possible.

* `aria-atomic`

`aria-atomic="true"`

The aria-atomic=”true” attribute tells screen readers to read out the entire element contents as one atomic unit, not just the bits that were updated.

e.g.

        <section aria-live="assertive" aria-atomic="true">

* Most browsers will throw a security exception if you try to do an XMLHttpRequest call from a file:// URL.

e.g. If you just load the file by loading it directly into the browser (via double clicking, etc.). To get it to run, you will need to upload it to a web server, such as, using GitHub, or a local web server like Python’s SimpleHTTPServer.

* Suggestions from other (random) developers

> if you care about minimizing the amount of tcp requests, websockets might be your best option

> I wouldn't use setInterval for this, because if there's a network lag, you wouldn't want a bunch of pending tcp requests to flood in when network lag clears

## Debriefing

20/05/20

Developer's notes: I have tried to turn the `xhr` procedure into a modern fetch request procedure. I've failed. If I were to promptly try again, I would look at writing the addEventListener first and initialising the fetch request inside the event listener. But I still think it is hopeless!

## Credits

- _MDN_ - [WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
