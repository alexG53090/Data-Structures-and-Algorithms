function diagonalSum(array2d) {
  return array2d.reduce(function(accumulator, current, i) {
    return accumulator + current[i];
  }, 0);
}



var square4 =

          [[1, 0, 0, 0],

          [0, 1, 0, 0],

          [0, 0, 1, 0],

          [0, 0, 0, 1]];
var square5 =

         [[2, 5, 1, 3, 9],

          [4, 1, 3, 0, 8],

          [1, 0, 9, 7, 6],

          [1, 7, 7, 3, 0],

          [3, 3, 8, 2, 4]];

console.log(diagonalSum(square4));
console.log(diagonalSum(square5));
