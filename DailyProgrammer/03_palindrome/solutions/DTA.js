/* Created by David Adams December 02 2015 */
function palindrome(phrase) {
  phrase = sanitize(phrase);
  if (phrase[0] != phrase[phrase.length - 1]) {
    return false;
  }
  return phrase === reverse(phrase);
}

function reverse(string) {
  /* another way to reverse - more efficient */
  // var revString = '';
  // for (var i = string.length - 1; i >=0; i--) {
  //   revString += string[i];
  // }
  // return revString;
  return string.split('').reverse().join('');
}

function sanitize(string) {
  return string.toLowerCase().replace(/\s/g, '');
}

console.log(palindrome("poop"));
console.log(palindrome("Alula"));
console.log(palindrome("A but tuba"));
console.log(palindrome("Not a palindrome"));
