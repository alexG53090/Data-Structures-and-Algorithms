isAnagram = function(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  var word1Array = word1.split("");
  var word2Array = word2.split("");

  word1Array.sort()
  word2Array.sort()

  if (word1Array.length != word2Array.length) {
    return false;
  }

  for (var i = 0; i < word1Array.length; i++) {
    if (word1Array[i] != word2Array[i]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("test", "test"));
console.log(isAnagram("test", "tset"));
console.log(isAnagram("Anagram", "aarmnga"));
console.log(isAnagram("Anagram", "aarmngad"));
