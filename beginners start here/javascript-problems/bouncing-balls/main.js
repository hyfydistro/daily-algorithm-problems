const para = document.querySelector('p');
let count = 0;

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// This function takes towo numbers as arguments, and returns a random number in the range between the two
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// 'Shape' constructor
function Shape(x, y ,velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY= velY;
  this.exists = exists; // boolean value ONLY
}

// 'Ball' constructor inherit from 'Shape' constructor
function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// Update ball's data and movement
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

//Collision detection
Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      // An algorithm to check the collision of two circles
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
      }
    }
  }
};

// 'EvilCircle' constructor
function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = 'white';
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

// 'EvilCircle' constructor 'draw' method
EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke()
};

// 'EvilCircle' constructor 'CheckBounds' method (similar to 'Shape' prototype 'update')
EvilCircle.prototype.checkBounds = function() {
  if ((this.x + this.size) >= width) {
    this.x = -(this.size);
  }

  if ((this.x - this.size) <= 0) {
    this.x = -(this.size);
  }

  if ((this.y + this.size) >= height) {
    this.y = -(this.size);
  }

  if ((this.y - this.size) <= 0) {
    this.y = -(this.size);
  }
};

// 'EvilCircle' constructor 'draw' method
EvilCircle.prototype.setControls = function() {
  let _this = this;
window.onkeydown = function(e) {
    if (e.key === 'a') {
      _this.x -= _this.velX;
    } else if (e.key === 'd') {
      _this.x += _this.velX;
    } else if (e.key === 'w') {
      _this.y -= _this.velY;
    } else if (e.key === 's') {
      _this.y += _this.velY;
    }
  }
};

// 'EvilCircle' constructor 'collisionDetect' method (similar to 'Shape' prototype 'collisionDetect')
EvilCircle.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    // Check whether the current ball being checked exists
    if (balls[j].exists) {
      // An algorithm to check the collision of two circles
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        count--;
        para.textContent = 'Ball Count: ' + count;
        // delete balls[j];
      }
    }
  }
}

// Animating the ball
let balls = []

while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas to avoid drawing errors
    random(0 + size, width - size), // position x
    random(0 + size, height - size), // position y
    random(-7, 7), // velX
    random(-7, 7), // velY
    true,
    'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')', // color of ball randomly generated
    size
  );

  balls.push(ball);
  count++;
  para.textContent = 'Ball count: ' + count;
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evilBob.draw();
  evilBob.checkBounds();
  evilBob.collisionDetect();

  requestAnimationFrame(loop);
}

// Initiate Game

let evilBob = new EvilCircle(150, 150, true);
evilBob.setControls();

loop();
