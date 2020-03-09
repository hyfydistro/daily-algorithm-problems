# Change Background Color via Buttons available

\#events

## Brief

You  need to set an event listener on the `<button>`'s parent element (`<div class="button-bar"> ... </div>`), which when invoked by clicking any of the buttons will set the background of the `button-bar` to the color contained in the button's `data-color` attribute.

Solve this without looping through all the buttons, and giving each one their own event listener.

This task involves making use of bubbling and event objects. You need to set a click listener on the buttons' parent element, which when invoked by clicking any of the buttons will use `e.target` to grab the `data-color` attribute of the particular button that was clicked, and set the background of the `button-bar` to that color.

## Keynotes

* `HTML data-*` Attribute

**Definition and Usage**

The `data-*` attributes is used to store custom data private to the page or application.

The `data-*` attributes gives us the ability to embed custom data attributes on all HTML elements.

The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

The `data-*` attributes consist of two parts:

1. The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-".

2. The attribute value can be any string.

Note: Custome attributes prefixed with "data-" will be completely ignored by the user agent.

**Version compatibility**

_Between HTML 4.01 and HTML5_

The `data-*` attributes are new in HTML5.

**Syntax**

        <element data-\*="_somevalue_">

Where as,

_somevalue_, specifies the value of the attribute (as a string)

* Use `event.getAttribute("data-*")` to obtain the value from the element with the set data attribute.

* Event Delegation: A simple technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.

## Credits

- _MDN_ - Test your skills: Events

- _SitePoint_ - Event Delegation

- _StackOverflow_ - "what is event bubbling and capture"
