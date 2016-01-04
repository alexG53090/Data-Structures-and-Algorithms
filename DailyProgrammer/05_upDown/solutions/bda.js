// created by Ben

function path(array) {
  return array.slice(1).map(function(element, i) {
    var difference = element - array[i];
    if (difference === 0) return 'even';
    else return (difference < 0) ? 'down' : 'up';
  });
}

console.log(path([6,3,5,4,3,4,4,5]));
