// Created by Elana Kopelevich

var input1 = 3333;
var input2 = 4567;
var input3 = 2527;

function rampNumbers( n ) {
  var nString,
      tmp,
      tmp2,
      result;

  nString = n.toString();

  for ( var i = 0; i < nString.length - 2; i++ ) {
    tmp = nString.charAt(i + 1) - nString.charAt(i);
    tmp2 = nString.charAt(i + 2) - nString.charAt(i + 1);
    console.log( tmp );
    console.log( tmp2 );
    if ( tmp === tmp2 ) {
      result = true;
    } else {
      result = false;
    }
  }
  console.log( result );
}

rampNumbers( input1 );
rampNumbers( input2 );
rampNumbers( input3 );
