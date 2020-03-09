#Printing those products

## Brief:

Printing out product names and prices on an invoice, then totalling the prices and printing them at the bottom.

1. Turn the product name and price separated by a colon into an array and store it in an array called products.

2. Replace the for loop condition exterminate with a conditional test that stops the loop when `i` is no longer less than the products array’s length.

3. We want you to write a line of code that splits the current item (`name:price`) into two separate items, one containing just the name and one containing just the price.

4. As par to above line of code, you’ll also want to convert the price from a string to a number. Use `Number([item])`.

5. There is a variable called ‘total’ that is created and given a value of 0 at the top of the code. Inside the loop we want you to add a line that adds the current item price to that total in each iteration of that loop, so that at the end of the code the correct total is printed onto the invoice. You might need an assignment operator to do this.

6. Write in the line of `itemText` variable to make it equal to (or similar) “[current item name] - $[current item price]”. e.g. “Shoes - $23.99”. This should be simple string concatenation.
