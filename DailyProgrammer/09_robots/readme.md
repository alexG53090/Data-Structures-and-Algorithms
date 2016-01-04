# Robots!!

### Scenario
There are two robots on a x plane. They can only move left or right. There is also a marker in between the robots. It cannot move. The position of the robots is unknown but you do know that one is to the left of the marker and another is to the right of the marker.

......👾.......................................👾...... <br>
<--------------- 🚏 ------------------>

### Goal
The goal is the make the robots collide.

### Task
Think of an algorithm that will be programmed to both robots to achieve the goal. You are limited to using the following methods built in to the robots:

These functions change the x location of the robots. `direction` is a string either "left" or "right"
- Robot.moveOne(direction)
- Robot.moveTwo(direction)

Returns a boolean (true if the robot is on marker)
- Robot.onMarker()

### Stretch

Actually write the algorithm to solve the problem. The robot classes are defined with their methods in the robot.js file. Use the `checkCollision` freely to detect a collision. Good luck!
