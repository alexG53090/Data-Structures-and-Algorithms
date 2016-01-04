function gameOfThree(number) {
  var trailing = 0;
  console.log('starting number is '+number);
  while (number != 1) {
    if (number % 3 == 0) {
      if(trailing !=1){
        console.log(number + ' 0');
      }
      else{
        trailing = 0;
      }
      number /= 3;
    } else if ((number +  1) % 3 == 0) {
      console.log(number+' 1');
      number += 1;
      trailing = 1;
    } else {
      console.log(number+' -1');
      number -= 1;
      trailing = 1;
    }
  }
console.log(number);
}

gameOfThree(100);
// gameOfThree(31337357);
// gameOfThree(10090820);
