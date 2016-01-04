function reverse(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(input) {
  input = input.toLowerCase();
  var reversedInput = reverse(input);
  if (input == reversedInput) {
    console.log('Yes ' + input + ' is a palindrome! ' + input + ' equals ' + reversedInput);
  } else {
    console.log('Sorry, ' + input + ' is not a palindrome. ' + input + ' does not equal ' + reversedInput);
  }
}

isPalindrome('Bob');
