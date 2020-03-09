// Given an array of 5 integers
// Find the minimum sum of four of the integers
// Find the maximum sum of four of the integers
// Display output with space in one line e.g. '17 24'

/*
===== Key Notes =====

Your array should be displayed with space???

===== Definitions =====

* Math.max()

* prototype.apply(parameter1, [array])

* reduce()

*/

let arr = [1, 3, 5, 7, 9];

function possibleMinSum() {

  let max = Math.max(...arr);
  let unwantedNumber = 0;
  let newArr = [];
  // Get rid of the max number

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {

      unwantedNumber = arr.slice(i, max)

      // Create a copy of 'arr' without the 'unwantedNumber'
      newArr = arr.filter(function(currentValue) {
        return currentValue != unwantedNumber;
      });
      console.log(newArr);
    }
  }

  // Iterate over array and add each integer to the variable 'sum'
  let sum = 0;
  for (let n of newArr) {
    sum += n;
  }

  console.log(sum);
  return sum; // 'sum' should be 16
}

function possibleMaxSum() {
  let min = Math.min(...arr);
  let unwantedNumber = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {

      unwantedNumber = arr.slice(i, min)

      // Create a copy of 'arr' without the 'unwantedNumber'
      newArr = arr.filter(function(currentValue) {
        return currentValue != unwantedNumber;
      });
      console.log(newArr);
    }
  }

  let sum = 0;
  for (let n of newArr) {
    sum += n;
  }

  console.log(sum);
  return sum;
}

function printMinAndMaxTotal() {
  return `${possibleMinSum()} ${possibleMaxSum()}`;
}

possibleMinSum(); // 16
possibleMaxSum(); // 24
printMinAndMaxTotal(); // 16 24

// go through array and find min/max
// find the max for finding the min and exclude that
// find the min for finding the max and exclude that
// go through and total the rest of the respective available in the arrays

// OR

// iterate to find the min in an array and put in a variable
// iterate the next min number for FOUR (indexed) number of times
// each iteration adds to the result variable

/* ===== Mini-Max Sum ===== */

// Hint: Make a copy or re-use the array

/* Pre-ES6 method(s) */
var arr = [1, 3, 5, 7, 9];

function miniMaxSum() {
  // Find minimum total
  var maxNumber = Math.max.apply(null, arr); // 9
  var minArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === maxNumber) {
      continue;
    }
    minArr.push(arr[i]); // [1, 3, 5, 7, 9]
  }
  console.log(minArr);

/* Method i */
  var minTotal = 0;
  for (var i = 0; i < minArr.length; i++) {
    minTotal += minArr[i];
  }

  /* Method ii */
  // 'accumulator' is created from the reduce() function to store the accumulated numbers.
  // 'currentValue' is the parameter given to represent the index or objects that's iterateed over the arrays.
  // NB: Both parameters are required!
  //
  // minTotal = minArr.reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue;
  // })

  console.log(minTotal);

  // Find maximum total
  var minNumber = Math.min.apply(null, arr); // 9
  var maxArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === minNumber) {
      continue;
    }
    maxArr.push(arr[i]); // [1, 3, 5, 7, 9]
  }
  console.log(maxArr);

  var maxTotal = 0;
  for (var i = 0; i < maxArr.length; i++) {
    maxTotal += maxArr[i];
  }

  console.log(maxTotal);

  // Print minimum and maximum total in one line separated by a space ' '
  return JSON.stringify(minTotal + ' ' + maxTotal);
}

miniMaxSum();

/* ES6 method(s) */

let arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
  let maxArr = arr.sort((a, b) => a - b);
  let minArr = arr.sort((a, b) => b - a);

  let maxTotal = maxArr.slice(arr.length - 4).reduce((accumulator, currentValue) => accumulator += currentValue, 0);

  let minTotal = minArr.slice(arr.length - 4).reduce((accumulator, currentValue) => accumulator += currentValue, 0);

  return `${minTotal} ${maxTotal}`;
}

miniMaxSum();
