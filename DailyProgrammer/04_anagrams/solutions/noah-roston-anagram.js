function anagram(str1, str2){
  if(str1.length != str2.length){
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  var str2Array = [];
  for(var i = 0; i < str2.length; i++){
    str2Array.push(str2.charAt(i));
  }
  // console.log(str2Array);

  for(var i = 0; i < str1.length; i++){
      // console.log(str1.charAt(i));
      for(var j = 0; j < str2Array.length; j++){
        if(str1.charAt(i) == str2Array[j]){
          var temp = str2Array[j];
          str2Array[j] = str2Array[str2Array.length-1];
          str2Array.pop();
        }
      }

  }
  if(str2Array.length == 0){
    return true;
  }
return false;

}

console.log(anagram('THE ROOM','room the'));
// console.log(anagram('this','thas'));
