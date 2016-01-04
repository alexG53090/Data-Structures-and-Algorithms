diagonalSum = function(mainArray) {
  diagSum = 0;

  for (var i = 0; i < mainArray.length; i++) {
    diagSum += mainArray[i][i]
  }
  return diagSum
}

test1 = [[1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1]]

console.log(diagonalSum(test1));

test2 = [[2, 5, 1, 3, 9],
          [4, 1, 3, 0, 8],
          [1, 0, 9, 7, 6],
          [1, 7, 7, 3, 0],
          [3, 3, 8, 2, 4]]

console.log(diagonalSum(test2));
