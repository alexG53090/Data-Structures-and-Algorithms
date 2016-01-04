// Created by Elana Kopelevich

var input1 = 'banana';
var input2 = 'ana';

function isPalindrome( word ) {
  var lc = word.toLowerCase();
  var reverse = word.toLowerCase().split('').reverse().join('');
   if ( lc === reverse ) {
     console.log('Yes, ' + word + ' is a palindrome.');
   } else {
     console.log('No, ' + word + ' is not a palindrome.');
   }
}

isPalindrome( input1 );
isPalindrome( input2 );
