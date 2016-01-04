function zipArrays(a1, a2){
  var newArray=[]
  var a2Extra = [];
  if (a1.length < a2.length) a2Extra = a2.splice(a1.length, a2.length);
  a1.forEach(function(elem, index){
    newArray.push(elem);
    newArray.push(a2[index]);
  })
  return newArray.concat(a2Extra);
}

console.log(zipArrays([1,2,3],[4,5,6,7,8,9]))
