function palindrome(string){
  string = string.replace(/\s/g, '');
  string = string.toLowerCase();
  var j = string.length - 1;
    for(var i = 0; i < string.length/2; i++){
      console.log(string[i]+' = ' +string[j]);
      if(string[i] != string[j]){
          return false;
      }
      j--;
    }
    return true;
}

console.log(palindrome('A slut nixes sex in Tulsa'));

var str = 'hello';
str = str.slice(1,2);
console.log(str);

function palindrom2(string){
  return string == str.split('').reverse().join('');
}
