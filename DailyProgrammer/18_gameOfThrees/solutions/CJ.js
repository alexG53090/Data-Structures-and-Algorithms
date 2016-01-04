function gameOfThrees(value) {
  if(value == 1) {
    console.log(value);
  } else{
    var remainder = value % 3;
    switch (remainder) {
      case 0:
        console.log(value, 0);
        break;
      case 1:
        console.log(value, -1);
        value -= 1;
        break;
      case 2:
        console.log(value, 1);
        value += 1;
        break;
    }
    gameOfThrees(value / 3);
  }
}

gameOfThrees(31337357);
