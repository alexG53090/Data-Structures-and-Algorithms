var input = process.argv[2] || 31337357

function gameOfThrees(input) {
  console.log(input)

  // * The game stops when you reach "1".
  if (input === 1) {
    return true
  }
  // * If the number is divisible by 3, divide it by 3.
  if (input%3 === 0) {
    console.log('/3')
    input = input/3
    gameOfThrees(input)
  }
  // If it's not...
  else {
    // *  either add 1 or subtract 1 (to make it divisible by 3),
    if (input%3 === 1) {
      console.log('-1')
      input -= 1
    }
    if (input%3 === 2) {
      console.log('+1')
      input += 1
    }
    // then divide it by 3.
    gameOfThrees(input)
  }
}

gameOfThrees(input)
