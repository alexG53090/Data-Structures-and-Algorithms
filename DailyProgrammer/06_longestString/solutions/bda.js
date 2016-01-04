// created by Ben

function longestString(array) {
  var answer = array.sort(function(word1, word2) {
    return word2.length - word1.length;
  })[0];
  return {[answer]: answer.length};
}

console.log(longestString(["truck", "sidewalk", "book"]));
console.log(longestString(["long", "shortest", "nonsense", "onomatopoeia"]));
