// function garland(word) {
//   for (var i = word.length - 1; i > 0; i--) {
//     if (word.substr(0, i) === word.substr(word.length - i)) {
//       return i;
//     }
//   }
//   return i;
// }

function garland(word) {
  if (word === arguments[1]) return word.length;
  var word2 = arguments[1] || word;
  return garland(word.substr(0, word.length - 1), word2.substr(1));
}


[ 'programmer',
  'ceramic',
  'onion',
  'alfalfa',
  'hotshots',
  'abracadabra',
  'couscous']
  .forEach(function(word) {
    console.log(word + ':', garland(word));
  });
