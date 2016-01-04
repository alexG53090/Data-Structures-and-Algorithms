'use strict'
const isRampNumber = (input) => input == (''+input).split('').sort().join('')

let input
input = 1234
console.log(input, isRampNumber(input))

input = 12343
console.log(input, isRampNumber(input))

input = 139
console.log(input, isRampNumber(input))

input = 123
console.log(input, isRampNumber(input))

input = 987
console.log(input, isRampNumber(input))

input = 555
console.log(input, isRampNumber(input))
