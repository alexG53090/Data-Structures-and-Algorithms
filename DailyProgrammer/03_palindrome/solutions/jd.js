isPalindrome = function(name){
  var nameReverse = name.split("").reverse().join("").toLowerCase();
  name = name.toLowerCase();
  
  if (name === nameReverse) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("J"));
console.log(isPalindrome("Anna"));
console.log(isPalindrome("Frank"));
console.log(isPalindrome("Scott"));
console.log(isPalindrome(""));
