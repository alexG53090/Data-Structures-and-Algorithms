function zipArrays(array1,array2){
  var length = array1.length+array2.length;
  var ans = [];
var j = 0;
var k = 0;
  for(var i = 0; i < length; i++){
    if(i%2 ==0){
      ans.push(array1[j]);
      j++;
    }
    else{
      ans.push(array2[k]);
      k++;
    }
  }
  return ans;
}
console.log(zipArrays([1,2,3], [4,5,6]));

function zipArrays2(array1,array2){
  var ans = [];
  ans = 
}
