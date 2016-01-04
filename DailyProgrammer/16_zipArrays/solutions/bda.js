function zipArrays(array1, array2) {
  var ret = [];
  for (var i = 0; i < Math.max(array1.length, array2.length); i++) {
    if (i < array1.length) ret.push(array1[i]);
    if (i < array2.length) ret.push(array2[i]);
  }
  return ret;
}

console.log(zipArrays([1,2,3],[4,5,6]));
console.log(zipArrays([1,2,3,4],[5,6,7]));
