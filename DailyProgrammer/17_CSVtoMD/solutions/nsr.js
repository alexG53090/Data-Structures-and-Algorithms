var csv = require('../csv');

var array = csv.split('\n');

for(var i = 0; i < array.length; i++){
  array[i] = array[i].split(',');
}

//Determine Column Lengths
var col1 = [];
for(var i = 0; i < array.length; i++){
  col1.push(array[i][0]);
}

var col2 = [];
for(var i = 0; i < array.length; i++){
  col2.push(array[i][1]);
}

var col3 = [];
for(var i = 0; i < array.length; i++){
  col3.push(array[i][2]);
}
// console.log(col3);
//Find Column Widths
var c = [];
c[0] = col1.sort(function (a, b) { return b.length - a.length; })[0].length;
c[1] = col2.sort(function (a, b) { return b.length - a.length; })[0].length;
c[2] = col3.sort(function (a, b) { return b.length - a.length; })[0].length;


for(var i = 0; i < array.length; i++){
  for(var j = 0; j < 3; j++){
    array[i][j] = array[i][j].split('');
    var space = c[j] - array[i][j].length;
    for(var k = 0; k < space; k++){
      array[i][j].push(' ');
    }
    array[i][j].push(' | ');
    array[i][j] = array[i][j].join('');
  }
}

//Make Second Line
var secondLine = '';
for(var i = 0; i < c[0]; i++){
  secondLine += '-';
}
secondLine += ' | ';
for(var i = 0; i < c[1]; i++){
  secondLine += '-';
}
secondLine += ' | ';
for(var i = 0; i < c[2]; i++){
  secondLine += '-';
}
secondLine += ' | ';
secondLine=secondLine.concat('\n');

var ans = '';

for(var i = 0; i < array.length; i++){
  for(var j = 0; j < 3; j++){
    ans = ans.concat(array[i][j]);
  }
  ans = ans.concat('\n');
  if(i == 0){
    ans = ans.concat(secondLine);
  }
}
console.log(ans);
