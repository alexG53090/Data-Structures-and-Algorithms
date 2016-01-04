// Two strings e.g. "pameesxl" and "examples".

function anagram(stringOne, stringTwo){
  stringOne = stringOne.split('').sort(function(a,b){
    return a<b;
  });
  stringTwo = stringTwo.split('').sort(function(a,b){
    return a<b;
  });
  if (stringOne.join('') === stringTwo.join('')){
    return true;
  } else {
    return false;
  }
}


console.log(anagram('pameesxl', 'examples'));
console.log(anagram('pameesxx', 'examples'));
