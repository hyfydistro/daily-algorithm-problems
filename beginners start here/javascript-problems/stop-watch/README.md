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


## Credits

- _MDN_

- _javascript.info_
