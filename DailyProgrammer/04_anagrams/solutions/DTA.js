/* Created by David Adams December 02 2015 */
function anagram(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }
  word1 = sanitize(word1);
  word2 = sanitize(word2);
  if (sortWord(word1) === sortWord(word2)) {
    return true;
  }
  return false;
}

function sanitize(string) {
  return string.toLowerCase().replace(/\s/g, '');
}

function sortWord(word) {
  return word.split("").sort().join("");
}

console.log(anagram("examples", 'lesexamp'));
console.log(anagram("examples", 'leseasdmp'));
console.log(anagram("apple", 'eLppa'));
console.log(anagram("apple", 'app'));
