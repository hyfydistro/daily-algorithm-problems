let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', ' Tina', 'Bert', 'Jada'];
let para = document.createElement('p');

function randomName(arr, randomize) {
  let result = arr[randomize()];
  para.textContent = result;
}

function random() {
  return Math.floor(names.length * Math.random());
}

const section = document.querySelector('section');

section.appendChild(para);

randomName(names, random);
