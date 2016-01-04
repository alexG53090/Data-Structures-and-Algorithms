function matrixSize(matrix) {
  return (matrix instanceof Array) && (matrix[0] instanceof Array) &&
    [matrix.length, matrix[0].length].join('x');
}

console.log('matrixSize');
console.log(matrixSize(['check for array at index 0']));
console.log(matrixSize([[1,2],[3,4]]));
console.log(matrixSize([[1,2,3],[4,5,6]]));
console.log(matrixSize([[1,2],[3,4],[5,6]]));



function matrixRotate(matrix) {
  return matrixSize(matrix) &&
    matrix[0].map(function(col, i) {
      return matrix.map(function(row, j) {
        var negJ = matrix.length - (j + 1);
        return matrix[negJ][i];
      });
    });
}

console.log('\nmatrixRotate:');
console.log(matrixRotate(['check for array at index 0']));
console.log(matrixRotate([[1,2],[3,4]]));
console.log(matrixRotate([[1,2,3],[4,5,6]]));
console.log(matrixRotate([[1,2],[3,4],[5,6]]));
