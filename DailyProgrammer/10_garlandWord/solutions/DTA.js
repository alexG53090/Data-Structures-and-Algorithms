/* Created by David Adams December 09 2015 */
function garland(word) {
  var degree = 0;
  for (var i = 1; i < word.length; i++) {
    var leftString = word.substr(0, i);
    var rightString = word.substr(word.length - i);
    if (leftString === rightString) {
      degree = i;
    }
  }
  return degree;
}

console.log(garland('programmer'));
console.log(garland('ceramic'));
console.log(garland('onion'));
console.log(garland('alfalfa'));
console.log(garland('hotshots'));
console.log(garland('abracadabra'));
console.log(garland('couscous'));
