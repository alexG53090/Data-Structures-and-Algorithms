higherLower = function(array) {
  rtnArray = []
  var previous = 0;

  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      // skip the first one
      previous = array[i];
      continue;
    }

    if (array[i] === previous) {
      rtnArray.push('even')
    } else if (previous > array[i]) {
      rtnArray.push('down')
    } else if (previous < array[i]) {
      rtnArray.push('up')
    }

    previous = array[i]
  }
  return rtnArray;
}

console.log(higherLower([6,3,5,4,3,4,4,5]));
console.log(higherLower([1,2,3,4,5,6,7,8]));
console.log(higherLower([8,7,6,5,4,3,2,1]));
