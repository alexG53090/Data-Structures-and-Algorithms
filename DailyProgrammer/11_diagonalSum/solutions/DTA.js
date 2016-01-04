/* Created by David Adams December 10 2015 */
function diagonalSum(matrix) {
  var sum = 0;
  for(var i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  return sum;
}

var square1 = [[1, 0, 0, 0],
[0, 1, 0, 0],
[0, 0, 1, 0],
[0, 0, 0, 1]];

var square2 = [[2, 5, 1, 3, 9],
[4, 1, 3, 0, 8],
[1, 0, 9, 7, 6],
[1, 7, 7, 3, 0],
[3, 3, 8, 2, 4]];

console.log(diagonalSum(square1));
console.log(diagonalSum(square2));
