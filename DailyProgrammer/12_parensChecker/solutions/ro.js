var p1 = "()(((())))"
var p2 = "())))("
var p3 = ")("

function pCheck(string) {
  var open = 0;
  var check = true;
  string.split('').forEach(function (par) {
    par === "(" ? open++ : open--;
    if (open < 0 ) check = false
  })
  return check
}

console.log(pCheck(p1));
console.log(pCheck(p2));
console.log(pCheck(p3));
