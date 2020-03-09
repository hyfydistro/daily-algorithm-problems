# Print Random Name

## Brief

Create a function that prints a random name from an array.

## Keynotes

* Getting a random number

What you need:

- `Math.floor()`

- `Math.random()`

        let randomNum = Math.floor(names.length * Math.random());

## Codes

        let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', ' Tina', 'Bert', 'Jada'];
        let para = document.createElement('p');

        function random(min, max) {
          const num = Math.floor(Math.random() * (max - min)) + min;
          return num;
        }

        function chooseItem(array) {
          let choide = array[random(0, array.length)];
          return choice;
        }

        para.textContent = chooseItem(names);

## Credits

- _MDN_ - Test Your Skills: Functions
