function Shape (name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function() {
  return this.sideLength;
};

let square = new Shape('Square', '4', '5');

let triangle = new Shape('Triangle', '3', '3');
