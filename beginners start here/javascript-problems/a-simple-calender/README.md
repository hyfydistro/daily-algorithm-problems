# A Simple Calendar

## Brief

* A `<select>` element to allow the user to choose between different months.

* An `onchange` event handler to detect when the value selected in the `<select>` menu is changed.

* A function called `createCalender()` that draws the calendar and displays the correct month in the `<h1>` element.

Approach 1:

* You are advised to use logical OR to group multiple months together into a single condition; many of them share the same number of days.

* Think about which number of days is the most common, and use that as a default value.

## Background Information Needed

You will need to know the number of days in each month in order to accomplish this app. Leap year will be excluded.

1. January - 31 days
2. February - 28 days
3. March - 31 days
4. April - 30 days
5. May - 31 days
6. June - 30 days
7. July - 31 days
8. August - 31 days
9. September - 30 days
10. October - 31 days
11. November - 30 days
12. December - 31 days

The data shows:

31 days: January, March, May, July, August, October, December.

30 days: April, June, September, November

28 days: February

# Keynotes

Between the conditional statements `if...else`, `switch` and `ternary operator`, you can shorten your code by giving a default value to where the most recurring pattern applies. It will mostly likely halve your choice (code).
