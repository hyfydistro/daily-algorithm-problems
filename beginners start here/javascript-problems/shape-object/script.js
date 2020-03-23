// function Shape(name, sides, sideLength) {
//   this.name = name;
//   this.sides = sides;
//   this.sideLength = sideLength;
// }
//
// Shape.prototype.calcPerimeter = function() {
//   return `The perimeter of this ${this.name} is ${this.sides * this.sideLength}`;
// };

// Via ES6 'Class'

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    return `The perimeter of this ${this.name} is ${this.sides * this.sideLength}`;
  }
}

// Instances

let square = new Shape('Square', '4', '5');
let triangle = new Shape('Triangle', '3', '3');
