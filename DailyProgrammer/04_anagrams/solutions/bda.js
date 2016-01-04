function isAnagram(word1, wildcard) {
  function testWords(word1, word2) {
    return word1.split('').sort().join('') === word2.split('').sort().join('')
      && word1 !== word2;
  }

  if (wildcard instanceof Array) return wildcard.filter(function(word) {
    return testWords(word1, word);
  });
  else return testWords(word1, wildcard);
}

console.log(isAnagram('example', 'mapelex'));
console.log(isAnagram('example', ['pameexl', 'example', 'meelpax', 'nadda']));
