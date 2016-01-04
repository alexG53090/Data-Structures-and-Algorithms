function gameOfThrees(number) {
  var accumulator = arguments[1] || [];
  if (number === 1) {
    accumulator.push(number);
  } else {
    [-1, 0, 1].forEach(function(adjustment) {
      if ((number + adjustment) % 3 === 0) {
        accumulator.push([number, adjustment].join(' '));
        gameOfThrees((number + adjustment) / 3, accumulator);
      }
    });
  }
  return accumulator.join('\n');
}

console.log(gameOfThrees(100));
console.log(gameOfThrees(31337357));
