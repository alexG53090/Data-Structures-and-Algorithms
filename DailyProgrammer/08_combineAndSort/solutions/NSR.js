function combineAndSort(array1,array2){
  //combine arrays
  return array1.concat(array2).sort();
}

var array1 = [ "cat", "dog", "fish", "zebra" ],
  array2 = [ "lion", "aardvark", "gorilla" ];

console.log(combineAndSort(array1,array2));
