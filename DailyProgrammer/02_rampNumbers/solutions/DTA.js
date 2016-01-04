// Created by David Adams December 01 2015

function rampNumber(num) {
  numStr = num.toString();
  for (var i = 0; i < numStr; i++) {
    if (i != 0) {
      //i is not the first letter of the string
      if (numStr[i - 1] > numStr[i]) {
        //if the previous number is greater than the current return false
        return false;
      }
    }
  }
  //string is a valid Ramp Number
  return true;
}

console.log(rampNumber(112233344559));
console.log(rampNumber(111221155));
