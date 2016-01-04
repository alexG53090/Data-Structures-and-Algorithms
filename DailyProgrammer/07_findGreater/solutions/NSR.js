function findGreater(array,number){
  return array.filter(function(value){
    return (value > number);
  })
}
var x = findGreater([1,2,3,4,5,6,7,8], 5);
console.log(x);
