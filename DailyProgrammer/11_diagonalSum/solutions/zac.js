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

function diagonalSum(square) {
  var sum = 0
  var colCount = 0
  // Iterate through each row
  for (var row = 0; row < square.length; row++) {
    // Find the element at colCount in the current row
    sum += square[row][colCount]
    // Move to the next column to the right
    colCount++
  }
  return sum
}

console.log(diagonalSum(square4))
console.log(diagonalSum(square5))
