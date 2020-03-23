function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function() {
  return `The perimeter of this ${this.name} is ${this.sides * this.sideLength}`;
};

function Square(sideLength) {
  Shape.call(this, 'Squarepants', 4, sideLength);

// Write over 'Shape', or any argumentst given for 'name' and 'sides'
// Therefore, you CANNOT edit either from the console; this is UNTOUCHABLE! TRY!
}

// Inherit 'Shape' methods.
Square.prototype = Object.create(Shape.prototype);

// Re-define constructor to 'Square', not 'Shape' anymore.
Square.prototype.constructor = Square;

Square.prototype.calcArea = function() {
  return `The area of this ${this.name} is ${2 * this.sideLength}`;
}


// Via ES6 'Class'

// class Shape {
//   constructor(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }
//
//   calcPerimeter() {
//     return `The perimeter of this ${this.name} is ${this.sides * this.sideLength}`;
//   }
// }


// Instances

// let square = new Shape('Square', '4', '5');
// let triangle = new Shape('Triangle', '3', '3');


// Square ES6 'Class'

// class Square extends Shape {
//   constructor(sideLength) {
//     super('square', 4, sideLength);
//   }
//
//   calcArea() {
//     return `The area of ${this.name} is ${2 * this.sideLength}`;
//   }
// }
//
let square = new Square(3);
