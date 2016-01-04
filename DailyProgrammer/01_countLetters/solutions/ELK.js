// Created by Elana Kopelevich

var input1 = 'Hello World';
var input2 = 'The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.';

function countLetters( input ) {
  var result = {};
  var lc = input.toLowerCase();

  for ( var i = 0; i < lc.length; i++ ) {
    if ( lc.charAt(i) >=  'a' && lc.charAt(i) <= 'z' ) {
      if (result[lc.charAt(i)]) {
        result[lc.charAt(i)] = result[lc.charAt(i)] + 1;
      } else {
        result[lc.charAt(i)] = 1;
      }
    }
  }
  console.log( result );
}

countLetters( input1 );
countLetters( input2 );
