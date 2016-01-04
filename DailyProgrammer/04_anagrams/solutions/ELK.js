// Created by Elana Kopelevich

var input1 = 'banana';
var input2 = 'ana';
var input3 = 'aan';

function anagram( word1, word2 ) {
  var result;
  var wordArray1 = word1.split('').sort();
  var wordArray2 = word2.split('').sort();

  if (wordArray1 === wordArray2) {
    result =  word1 + ' and ' + word2 + ' are anagrams';
  } else {
    result = word1 + ' and ' + word2 + ' are not anagrams';
  }
  console.log( result );
}

anagram( input1, input2 );
anagram( input2, input3 );
