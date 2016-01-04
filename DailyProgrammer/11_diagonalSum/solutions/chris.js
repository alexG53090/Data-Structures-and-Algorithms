function diagonalSum(array){
  var sum = 0;
  for(var x=0; x<array.length; x++){
    for(var y=0; y<array[x].length; y++){
      if (x===y) sum += array[x][y];
    }
  }
  return sum;
}


var square4 = [[1, 0, 0, 0],

              [0, 1, 0, 0],

              [0, 0, 1, 0],

              [0, 0, 0, 1]];

var square5 = [[2, 5, 1, 3, 9],

          [4, 1, 3, 0, 8],

          [1, 0, 9, 7, 6],

          [1, 7, 7, 3, 0],

          [3, 3, 8, 2, 4]]


console.log(diagonalSum(square4));
console.log(diagonalSum(square5));
