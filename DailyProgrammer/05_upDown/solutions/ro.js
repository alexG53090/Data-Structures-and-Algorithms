function upDown(arr) {
  return arr.reduce(function (curr, next, ind) {
    var val = arr[ind- 1];
    if (val) {
      if (next > val) {
        var text = "up"
      } else if (next === val) {
        var text = "even"
      } else {
        var text = "down"
      }
      curr.push(text);
    }
    return curr
  }, [])
}
