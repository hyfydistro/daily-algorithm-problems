// Function declaration

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber = randomRange(5,15);

console.log(randomNumber);
console.log(randomRange(5,15))

// Arrow function

let randomRange1 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let randomNumber1 = randomRange1(5,15);

console.log(randomNumber1);
console.log(randomRange1(5,15))
