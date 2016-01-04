/* Created by David Adams December 03 2015 */
function longestString(array) {
  var longestLength = 0;
  var longestString;
  for (var i = 0; i < array.length; i++) {
    if (longestLength < array[i].length) {
      longestLength = array[i].length;
      longestString = array[i];
    }
  }
  return {[longestString]: longestLength};
}

console.log(longestString(["truck", "sidewalk", "book"]));
