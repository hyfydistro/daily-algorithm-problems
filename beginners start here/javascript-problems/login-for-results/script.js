let machineActive = true;
let pwd = 'cheese';
let section = document.querySelector('section');
let machineResult;
let pwdResult;

// Assign 'pwdResult' to 'cheese' to see a different result.

if (machineActive) {
  machineResult = 'Your machine is on.'
  pwdResult == pwd ? pwdResult = 'Your login was successful': pwdResult = 'Login fail; your password was incorrect.';

  section.innerHTML = '';
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');

  para1.textContent = machineResult;
  para2.textContent = pwdResult;

  section.appendChild(para1);
  section.appendChild(para2);
} else {
  machineResult = 'Your machine is off. Turn on your machine to see results!'
}
