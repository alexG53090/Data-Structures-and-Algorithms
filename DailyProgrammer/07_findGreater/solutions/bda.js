function findGreater(array, number) {
  return array.filter(function(element) {
    return element > number;
  });
}

console.log(findGreater([1,2,3,4,5,6,7,8], 5));
