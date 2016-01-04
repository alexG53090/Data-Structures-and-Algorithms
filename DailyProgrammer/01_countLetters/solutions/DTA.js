/* Created by David Adams December 01 2015 */
function countLetters(str) {
  var results = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 &&  str.charCodeAt(i) <= 122) {
      if (results[str[i]] > 0) {
        results[str[i]] += 1;
      }
      else {
        results[str[i]] = 1;
      }
    }
  }

  return JSON.stringify(results);
}

console.log(countLetters("Hello World"));
