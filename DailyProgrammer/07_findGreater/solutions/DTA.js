/* Created by David Adams December 07 2015 */
function findGreater(array, num) {
  return array.filter(function(element) {return element > num;});
}

console.log(findGreater([1,2,3,4,5,6,7,8], 5));
