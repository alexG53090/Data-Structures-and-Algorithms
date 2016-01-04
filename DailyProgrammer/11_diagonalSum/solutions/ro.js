var square4 =

              [[1, 0, 0, 0],

              [0, 1, 0, 0],

              [0, 0, 1, 0],

              [0, 0, 0, 1]]

var square5 =

             [[2, 5, 1, 3, 9],

              [4, 1, 3, 0, 8],

              [1, 0, 9, 7, 6],

              [1, 7, 7, 3, 0],

              [3, 3, 8, 2, 4]]

function matrixSum(matrix) {
  return matrix.reduce(function (curr, next, ind) {
    return curr + next[ind];
  }, 0)
}

console.log(matrixSum(square4));
console.log(matrixSum(square5));
