/* Created by David Adams December 16 2015 */
function zipArrays(arr1, arr2) {
  var tail, length;
  var retArr = [];

  if (arr1.length < arr2.length) {
    //array 1 is shorter than array 2
    tail = arr2.slice(arr1.length)
    length = arr1.length;
  }
  else {
    //array 2 is shorter than array 1
    tail = arr1.slice(arr2.length)
    length = arr2.length;
  }

  for (var i = 0; i < length; i++) {
    retArr.push(arr1[i]);
    retArr.push(arr2[i]);
  }

  return retArr.concat(tail);
}

console.log(zipArrays([1,2,3], [4,5,6]));       //[1,4,2,5,3,6]
console.log(zipArrays([1,2], [3,4,5,6,7]));     //[1,3,2,4,5,6,7]
console.log(zipArrays([1,2,3,4,5], [6,7]));     //[1,6,2,7,3,4,5]
console.log(zipArrays([1,2,3], [4,5,6]));       //[1,4,2,5,3,6]
console.log(zipArrays([1,2], [3,4,5,6,7]));     //[1,3,2,4,5,6,7]
console.log(zipArrays([1,2,3,4,5], [6,7]));     //[1,6,2,7,3,4,5]
