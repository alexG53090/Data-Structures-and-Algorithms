function findGreater(array, value){
  // a place to store the result (array)
  var result = [];

  // iterate over array
  for (var i = 0; i < array.length; i++) {
    // check if current value is greater than value
    if(array[i] > value) {
      // add to result array
      result.push(array[i])
    }
  }

  // return the result
  return result;
}

console.log(findGreater([1, 2, 3, 4, 5, 6,7, 8], 5));
