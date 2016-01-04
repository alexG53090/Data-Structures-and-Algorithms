var operate = {
  '+': function(a, b) { return a + b; },
  '-': function(a, b) { return a - b; },
  'x': function(a, b) { return a * b; },
  '/': function(a, b) { return a / b; }
};
operate['*'] = operate['x'];

function calculateRPN(string) {
  return string.split(/\s/).reduce(function(stack, current) {
    var number = Number(current);
    if (isNaN(number)) {
      var second = stack.pop(), first = stack.pop();
      return stack.concat(operate[current](first, second));
    } else {
      return stack.concat(number);
    }
  }, []).pop();
}

console.log(calculateRPN('5 1 2 + 4 x + 3 -')); //14
console.log(calculateRPN('1 2 + 4 5 6 8 * - + +')); //-36
