// THis function returns a string padded with leading Zeros
function padZeros(num, totalLen) {
  var numStr = num.toString(); // Initialize return value as string
  var numZeros = totalLen = numStr.length; // Calculates number of zeros
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}

var result;
result = padZeros(42, 4); // returns "0042"
result = padZeros(42, 2); // returns "42"
result = padZeros(5, 4); // returns "0005"
