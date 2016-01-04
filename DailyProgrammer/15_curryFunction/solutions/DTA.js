/* Created by David Adams December 16 2015 */
function add(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

console.log(add(1)(1));       // returns 2
console.log(add(20)(20));     // returns 40
console.log(add(100)(5));     // returns 105
console.log(add(40)(2));      // returns 42
