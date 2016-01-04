const checkPalindrome = (input) =>
  sanitizeString(input) === reverseString(sanitizeString(input))

const sanitizeString = (input) =>
  input.toLowerCase().replace(/[^a-z]/ig, '')

const reverseString = (input) =>
  input.split('').reverse().join('')

console.log(checkPalindrome('anna'))
console.log(checkPalindrome('banana'))
console.log(checkPalindrome('I, man, am regal - a German am I'))
console.log(checkPalindrome('No lemons, no melon'))
console.log(checkPalindrome('Was it a car or a cat I saw?'))
console.log(checkPalindrome('Probably not a palindrome'))
