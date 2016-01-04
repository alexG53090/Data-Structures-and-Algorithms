// Created by Elana Kopelevich

var array1 = [1, 2, 3, 4, 5, 6, 7, 8];
var num = 5;

function findGreater( array, n ){
  var newArray = [];
  for ( var i = 0; i < array.length; i++ ){
    if ( array[i] > n ) {
      newArray.push( array[i] );
    }
  }
  console.log( newArray );
}

findGreater( array1, num );
