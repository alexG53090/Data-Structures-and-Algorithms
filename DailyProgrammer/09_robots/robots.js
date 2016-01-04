function Challenge(robotOne, robotTwo, marker) {
  this.robotOne = robotOne;
  this.robotTwo = robotTwo;
  this.marker = marker;
  this.status = "unsolved";
}

Challenge.prototype.checkCollision = function () {
  if (this.robotOne.x === this.robotTwo.x
     || this.robotOne.x > this.robotTwo.x
     || this.robotTwo.x < this.robotOne.x) {
    this.status = "solved"
    return true
  }
}

function Robot(x){
  this.x = x;
}

Robot.prototype.moveOne = function(dir) {
  if (dir === "left") {
    this.x -= 1;
  } else if (dir === "right") {
    this.x += 1;
  }
};

Robot.prototype.moveTwo = function(dir) {
  if (dir === "left") {
    this.x -= 2;
  } else if (dir === "right") {
    this.x += 2;
  }
};

Robot.prototype.onMarker = function () {
  return this.x === challenge.marker;
};

var randomNeg = Math.floor(Math.random()*100) * -1
var randomPos = Math.floor(Math.random()*100)

var robotOne = new Robot(randomNeg);
var robotTwo = new Robot(randomPos);

var challenge = new Challenge(robotOne, robotTwo, 0)

module.exports = challenge
