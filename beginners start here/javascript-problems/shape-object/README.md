# Shape Object

## Brief

Create an object that represent a shape, which logs out its features / properties and calculate for each other diverse type of shapes.

## Keynotes

* You can pre-add arguments for your new instances and constrain which and what parameter to use exclusively.

        class Square extends Shape {
          constructor(sideLength) {
            super('square', 4, sideLength);
          }

          calcArea() {
            return `The area of ${this.name} is ${2 * this.sideLength}`;
          }
        }

        let square = new Square(3);

## Credits

- _MDN_ - Test your skills: Object-Oriented JavaScript
