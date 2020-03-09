# Phone Book Search

\#for-loops

## Brief

Given a name and an array of objects containing names and emails (`phonebook`), search it finds the name. Output the name and phone number into the paragraph (`para`) and then exit the loop before it has run its course.

You are given three variables to begin with:

* `i` starts off with a value of 0; intended to be used as an iterator.

* `name` - contains a name to search for.

* `para` - contains a reference to a paragraph, which will be used to report the results.

## Keynotes

* How to loop through object literals?

e.g.

`phonebook[i].propertyName` equal `propertyValue`.

* Difference between for-in and for-of loop

**for-of**

Used to iterate over the values in an iterable.

**for-in**

Used to iterate over the properties of an object (object keys).

It turns out these for-loops didn't help in making the program.

* When to use a `do-while` loop?

A for-loop is used where you KNOW at compile time how many times this loop will execute.

A While loop is normally used when  in a scenario where you DON'T know how many times a loop will actually execute at run time.

A Do-while loop is used where your loop should execute at least one time.

## Credits

- _MDN_ - Test your skills: Loops
