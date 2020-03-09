# Mini-Max Sum

## Description

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, . Our minimum sum is  and our maximum sum is . We would print

16 24
Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14

## Keynotes

+ `Math.max(int1, int2, int3, int4, ...)`

+ `Math.min(int1, int2, int3, int4, ...)`

Does not work with arrays of numbers. However, there is a work around with this.

        Math.max(1, 2, 3, 4); // 4
        Math.min(1, 2, 3, 4); // 1

        var numbers = [1, 2, 3, 4];
        Math.max.apply(null, numbers) // 4
        Math.min.apply(null, numbers) // 1

Passing the `numbers` array as the second argument of `apply()` results in the function being called with all values in the array as parameters.

+ `[array].splice()` vs. `[array].slice()`

The `splice()` method changes the original array and the `slice()` method doesn't change the original array.

The `splice()` method returns the removed item(s) in an array and `slice()` method returns the selected elements in an array, as a new array object.

+ Clone arrays

        arrCopy = [...arr];

+ Re-use arrays

        var newArray = array.filter(function(item) {
          return condition;
        });

+ Alternative route: Using the `sort()` method

## Copywrite(s)

- _Hackerrank_ (website) - [Mini-Max Sum](https://www.hackerrank.com/challenges/mini-max-sum/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign)

- _Jstips_ (website) - [Calculate the Max/Min value from an array](https://www.jstips.co/en/javascript/calculate-the-max-min-value-from-an-array/)

- _W3Schools.com_ (website) - [JavaScript Array reduce() Method](https://www.w3schools.com/jsref/jsref_reduce.asp)

- _Programming with Mosh_ (website) - [JavaScript Array Reduce](https://youtu.be/g1C40tDP0Bk)

- _FreeCodeCamp_ (website) - [How to clone an array in JavaScript](https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/)

- _Medium_ (website) - [Rewriting JavaScript: Sum an Array](https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0)

- _alligator.io_ (website) - [filter() Array Method in JavaScript](https://alligator.io/js/filter-array-method/)

- _Medium_ (website) - [MINI-MAX SUM (HackerRank)](https://medium.com/@jurshsmith/mini-max-sum-hackerrank-f90d33fd5950)

- _Pavol Pidanič_ (website) - [Hackerrank - Mini-Max Sum](http://pidanic.com/en/blog/hackerrank-mini-max-sum/#javascript)
