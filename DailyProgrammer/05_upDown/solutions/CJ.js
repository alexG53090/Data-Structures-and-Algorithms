// created by CJ R. December 3, 2015

function upDown(arr) {
  return arr.slice(1).map(function(n, i){
    return arr[i] > n ? 'down' : arr[i] < n ? 'up' : 'even';
  });
}

console.log(upDown([6,3,5,4,3,4,4,5]));
