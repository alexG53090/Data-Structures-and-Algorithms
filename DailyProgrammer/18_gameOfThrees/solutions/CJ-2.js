var modifiers = [0, -1, 1];

function gameOfThrees(value) {
  if(value == 1) {
    console.log(value);
  } else{
    var remainder = value % 3;
    var modifier = modifiers[remainder];
    console.log(value, modifier)
    gameOfThrees((value + modifier) / 3);
  }
}

gameOfThrees(31337357);
