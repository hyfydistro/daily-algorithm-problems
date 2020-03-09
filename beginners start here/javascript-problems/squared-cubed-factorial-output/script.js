const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  let i = num;
  while (i > 1) {
    num *= i - 1;
    i--;
  }

  return num;
}

// write the circumference formula
function circumference(num) {
  // write code here
}

input.onchange = function() {
  const num = input.value;

  if (isNaN(num)){
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '. '
                       // write the circumference of 'num'
                       num + ' circumference is ' + circumference(num) + '.';
  }
}
