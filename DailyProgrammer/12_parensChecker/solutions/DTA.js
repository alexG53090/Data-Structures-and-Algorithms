/* Created by David Adams December 10 2015 */
function parensChecker(string) {
  var parens = 0;

  for(var i = 0; i < string.length; i++) {
    if (parens < 0) {
      return false;
    }
    if (string[i] === '(') {
      parens += 1;
    }
    if (string[i] === ')') {
      parens -= 1;
    }
  }

  return parens == 0 ? true:false;
}

console.log(parensChecker("()(((())))"));   //->true
console.log(parensChecker("())))("));       //->false
console.log(parensChecker(")("));           //->false
console.log(parensChecker("())))())("));    //->false
console.log(parensChecker("())(()"));       //->false
