# Stop Watch

## Brief

Modify it and create your own simple stopwatch.

You need to display a time, but in this you need:

* A "Start" button to start the stopwatch running.

* A "Stop" button to pause / stop it.

* A "Reset" button to reset the time back to `0`.

* The time display to show the number of seconds elapsed, rather than the actual time.

## Keynotes

* `.toLocaleTimeString()` method

`Date.prototype.toLocaleTimeString()`

Return the time portion of a Date object as a string, using locale conventions.

e.g.

        var d = new Date();
        var n = d.toLocaleTimeString();

Return Value: A String, representing the time as a string; A string representing the time portion of the given `Date` instance according to language-specific conventions.

* `Date.now()` method

If we only want to measure time, we don't need the `Date` object.

There's a special method `Date.now()` that returns the current timestap.

It is semantically equivalent to `new Date().getTime()`, but it doesn't create an intermediate `Date` object. So it's faster and doesn't put pressure on garbage collection.

It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.

        let start = Date.now() // milliseconds count from 1 Jan 1970

        // do the job
        for (let i = 0; i < 100000; i++) {
          let doSomething = i * i * i;
        }

        let end = Date.now(); // done

        alert(`The loop took ${end - start} ms`); // subtract numbers, not dates

**Syntax**

        dateObj.toLocaleTimeString([Locales[, options]])

* How to Convert seconds to time string format hh:mm:ss using JavaScript?

**Method 1: Passing the seconds to date object** and **Method 2: Calculating the hours, minute and seconds individually**. Since we are using `Date.now()` **Method 2** is more suitable, because **Method 1** requires the `new Date` object.

The hours can be calculated by dividing the seconds by `3600` since one hour equals `3600` seconds. This will find out the number of hours. This number is brought down to the nearest integer by using the `Math.floor()` function.

The minutes can be calculated by finding the number of seconds left after subtracting the number of hours. This value is divided by 60 to get the number of minutes. This number is brought down to the nearest integer by using the `Math.floor()`.

The seconds can be calculated by subtracting the number of seconds in the minutes value and the number of seconds in the hours value from the total seconds given before.

The final formatted date is create by converting each of these values to a string using the `toString()` method and then padding tehm with an extra `0`, if the value is a single-digit by using the `padStart()` method. The individual parts are then joined together with a colon(`:`) as the separator. This string is in the required format "**hh**:**mm**:**ss**"

* `padStart()` method

`String.prototype.padStart()`

This method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

**Syntax**

        str.padStart(_targetLength_ [, _padString_])

Parameters:

  _targetLength_: The length og the resulting string once the current string has been padded. If the value is less than the current string's length, the current string is returned as si.

  _padString_: [optional] The string to pad the current string with. If this padding string is too long to stay within the `targetLength`, it will be truncated from the end. The default value is "` `" (U+0020 'SPACE').

Return Value: A `String` of the specified length with the pad string applied from the start.

e.g.
        'abc'.padString(10); // "       abc"
        'abc'.padString(10, "foo"); // "foofooabc"
        'abc'.padString(6, "123456"); // "123abc"
        'abc'.padString(8, "0"); // "00000abc"
        'abc'.padString(1); // "abc"

Browser Compatibility: Not available in IE.

## Credits

- _MDN_

- _javascript.info_

- _Geeksforgeeks_ - How to Ocnvert seconds to time string format hh:mm:ss using JavaScript?
