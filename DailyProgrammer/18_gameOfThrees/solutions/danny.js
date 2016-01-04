'use strict'

const gameOfThrees = (input) => {
  while (input !== 1) {
    let change = 0;
    if (input%3===1) {
      change = -1
    } else if (input%3===2) {
      change = 1
    }
    console.log(input, change)
    input = input + change
    input = input / 3
  }
  console.log(1)
}

gameOfThrees(100)
