let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
section.appendChild(para1);
section.appendChild(para2);
