function add(a) {
  return function(b) {
    return a + b
  }
}

console.log(
  add(1)(1),   // returns 2
  add(20)(20), // returns 40
  add(100)(5), // returns 105
  add(40)(2) // returns 42
)
