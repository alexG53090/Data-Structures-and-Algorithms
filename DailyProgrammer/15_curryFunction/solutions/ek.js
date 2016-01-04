// Created by Elana Kopelevich

function add(num1) {
  return function(num2) {
    var result = num1 + num2;
    console.log ( result );
  };
}

add(1)(1);   // returns 2
add(20)(20); // returns 40
add(100)(5); // returns 105
add(40)(2); // returns 42
