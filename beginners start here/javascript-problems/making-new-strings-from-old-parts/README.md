# Making new strings form old parts

## Brief:

The array contains a bunch of strings containing information about train stations in the North of England. The strings are data items that contain the three-letter station code, followed by some machine-readable data, followed by a semicolon, followed by the human-readable station name.

e.g.

        MAN68932749jt3980;Manchester Piccadilly

We want to extract the station code and name, and put them together in a string with the following structure:

        MAN: Manchester Piccadilly

We’d recommend doing it like this:

1. Extract the three-letter station code and store it in a new variable.

2. Find the character index number of the semicolon.

3. Extract the human-readable station name using the semicolon character index number as a reference point, and store it in a new variable.

4. Concatenate the two new variables and a string literal to make the final string.

5. Change the value of the result variable to equal to the final string, not the input.
