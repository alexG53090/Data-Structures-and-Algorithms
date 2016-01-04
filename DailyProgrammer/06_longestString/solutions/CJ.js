function longestString(strings) {
  var longest = strings[0];
  strings.forEach(function(string){
    if (string.length > longest.length) longest = string;
  });
  var obj = {};
  obj[longest] = longest.length;
  return obj;
}

console.log(longestString(["truck", "sidewalk", "book"]));
