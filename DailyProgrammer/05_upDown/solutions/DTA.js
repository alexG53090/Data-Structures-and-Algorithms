/* Created by David Adams December 03 2015 */
function upDown(array) {
  var retArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i != 0) {
      if (array[i] > array[i - 1]) {
        //current number is higher than previous number
        retArr.push("up");
      }
      else if (array[i] < array[i - 1]) {
        //current number is lower than previous number
        retArr.push("down");
      }
      else {
        //current numbre is equal to previous number
        retArr.push("even");
      }
    }
  }
  return retArr;
}

console.log(upDown([6,3,5,4,3,4,4,5]));
