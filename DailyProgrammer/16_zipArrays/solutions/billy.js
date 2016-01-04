function zipArray(array1, array2){
  var zipped = [];
  for (i=0; i<array1.length; i++){
    zipped.push(array1[i]);
    zipped.push(array2[i]);
  }
  return zipped;
}


console.log(zipArray([1,2,3], [4,5,6]));
