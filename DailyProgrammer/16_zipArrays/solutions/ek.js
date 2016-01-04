// Created by Elana Kopelevich

function zipArrays(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    newArray.push(array1[i], array2[i]);
  }
  console.log(newArray);
}

zipArrays([1,2,3], [4,5,6]);
