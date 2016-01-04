// function isPalindrome(string) {
//   var ret = string.match(/[^\s]/g).join('').toLowerCase();
//   return ret === ret.split('').reverse().join('');
// }

function isPalindrome(string) {
  string = string.replace(/\s/g, '').toLowerCase();
  
  return string.length <= 1 ||
    string[0] === string[string.length - 1] &&
      isPalindrome(string.substr(1, string.length - 2));
}

['race car', 'LeVEl', 'd bdfG GF d bd', 'not A PalinDrome', 'something else',
  'ab c1 cba', 'abc1c b1a'].forEach(function(string) {
    console.log(isPalindrome(string));
  }
);
