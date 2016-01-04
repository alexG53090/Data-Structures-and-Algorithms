function calculateRPN(input){
  var inputs =  input.split(' ');
  var stack = [];
  for (var i = 0; i < inputs.length; i++) {
    var value = Number(inputs[i]);
    if(isNaN(value)){
      if(inputs[i] == 'x') inputs[i] = '*';
      var firstValue = stack.pop();
      var secondValue = stack.pop();
      stack.push(eval(secondValue + inputs[i] + firstValue));
    } else {
      stack.push(value);
    }
  }

  return stack[0];
}
console.log(calculateRPN('5 1 2 + 4 x + 3 -')) //14
console.log(calculateRPN('1 2 + 4 5 6 8 * - + +')) //-36
