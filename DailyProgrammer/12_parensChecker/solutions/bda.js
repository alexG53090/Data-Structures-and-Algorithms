function parensChecker(string) {
  var depth = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') depth++;
    else if (string[i] === ')') depth--;
    if (depth < 0) return false;
  }
  return depth === 0;
}


console.log(parensChecker("()(((())))")); //=> true

console.log(parensChecker("())))(")); //=> false

console.log(parensChecker(")(")); //=> false
console.log(parensChecker("()(")); //=> false
