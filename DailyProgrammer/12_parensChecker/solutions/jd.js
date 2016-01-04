parensChecker = function(string) {
  var parenOpen = 0;
  var array = string.split("")

  for (var i = 0; i < array.length; i++) {
    if (array[i] === ")" && parenOpen === 0) {
      return false;
    } else if (array[i] === "(") {
      parenOpen += 1;
    } else if (array[i] === ")") {
      parenOpen -= 1;
    }
  }

  if (parenOpen === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(parensChecker("()(((())))"));
console.log(parensChecker("())((((())))"));
console.log(parensChecker("())))("));
console.log(parensChecker(")("));
console.log(parensChecker("())(()"));
