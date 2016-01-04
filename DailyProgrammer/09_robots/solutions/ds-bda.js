var challenge = require('../robots');

var robotOne = challenge.robotOne, robotTwo = challenge.robotTwo;

var direction = 'left', spaces = 0;
while (!robotOne.onMarker() || !robotTwo.onMarker()) {
  spaces ++;
  direction = direction === 'left' ? 'right' : 'left';
  [robotOne, robotTwo].forEach(function(robot) {
    if (!robot.onMarker()) {
      for (var i = 0; i < spaces;) {
        if (spaces - i > 1) {
          robot.moveTwo(direction);
          i += 2;
        } else {
          robot.moveOne(direction);
          i ++;
        }
      }
    }
  });
}
