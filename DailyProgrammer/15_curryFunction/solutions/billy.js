function add(num){
  var a = num;
  return function(num){
    return a + num;
  } 
}; 

console.log(add(1)(1));
console.log(add(20)(20));
console.log(add(100)(5));
console.log(add(40)(2));
