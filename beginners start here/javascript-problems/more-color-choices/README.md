# More Color Choices

# Brief

Make five color themes for your website.

# keynotes

* It should accept the `choice` variable as its input expression.

* For each case, the choice should equal one of the possible values that can be selected, that is: black, white, purple, yellow or psychedelic.

Note: The values are case sensitive, and should equal the `<option>` element `value` values rather than the visual labels.

* For each case, the `update()` function should be run, and be passed two color values, the first one for the background color, and the second one for the text color. Remember that color values are strings, so need to be wrapped in quotes.

# learning

* GlobalEventHandlers.onchange

The `onchange` property og the `GlobalEventHandlers` mixin is an `EventHandler` for processing `change` events.

`change` events fire when the user commits a value change to a form control. This may be done, for example, by clicking outside of the control or by using outside of the control or by using the `Tab` key to switch to a different control.

NB: Unlike the `oninput`, the `onchange` event handler is not necessarily called for each alteration to an element's `value`.

**Syntax**

_target_.onchange = _functionRef_;

`functionRef` is a function name or a function expression. The function receives an `Event` object as its sole argument.
