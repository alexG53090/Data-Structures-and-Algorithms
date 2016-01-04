const checkAnagram = (word1, word2) => sanitize(word1) === sanitize(word2)
const sanitize = (input) => sort(input.toLowerCase().replace(/[^a-z]/ig, ''))
const sort = (input) => input.split('').sort().join('')

console.log(checkAnagram('banana', 'aaannb'))
console.log(checkAnagram('examples', 'selpmaxe'))
console.log(checkAnagram('a', 'a'))
console.log(checkAnagram('examples', 'eexamples'))
console.log(checkAnagram('a', 'b'))
