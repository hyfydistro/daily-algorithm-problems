# Generate Random Whole Number within a Range

Generate a random number that falls within a range of two specific numbers.

## keynotes

Define a minimum number (e.g. `min`) and a maximum number (e.g. `max`).

The following formula is used for _JavaScript_:

        Math.floor(Math.random() * (max - min + 1) + min)


When it comes to generating random numbers `Math.floor()` has a more even distribution than `Math.round()`.

Use Case: `Math.floor()` vs `Math.round()`

e.g.

        Math.floor(Math.random() * 3)

Here, 0-0.999999 will give you 0, 1.0 to 1.999999 will give you 1, and 2.0 to 2.999999 will give you 2. Every number has a 33% chance of being the result.

e.g.

        Math.round(Math.random() * 2)

Here, 0-0.499999 will give you 0, 0.5 to 1.499999 will give you 1, and 1.5 to 1.999999 will give you 2. Note that the range of numbers that lead to a 1 is twice as big as those that lead to 0 or 1. That is 25% chance of 0, 50% chance of 1, and 25% chance of 2.

+ `Math.random()`: a function that returns a floating-point in range 0-0.999... (i.e. 0-1, but not the 1 included).

## Credits

- _reddit_ (website) [Why not always use Math.round instead of Math.floor?](https://www.reddit.com/r/javascript/comments/5vik4j/why_not_always_use_mathround_instead_of_mathfloor/)
