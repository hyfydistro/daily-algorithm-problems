let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here

  const cats = JSON.parse(catString);

  // Loop through cat mothers
  for (let i = 0; i < cats.length; i++) {
    // Loop through array
    // assign mother's name plus a comman
    // if last element, use 'and' and a full stop at the end
    if (i === (cats.length - 1)) {
      motherInfo += `and ${cats[i]}.`;
    } else {
      motherInfo += `${cats[i]}, `;
    }
  }

// Find the total number of kittens
// Find the total of male
// Find the total of female
  for (let j = 0; j < cats.length; i++ ) {
    for (let k = 0; k < cats[i].kittens.length; i++ ) {
      total++;
      if (cats[i].kittens[k].gender === 'm') {
        male++;
      }
    }
  }

// end

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
section.appendChild(para1);
section.appendChild(para2);
