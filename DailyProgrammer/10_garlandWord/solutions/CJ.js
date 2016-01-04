function garland(w) {
  for (var l = w.length, i = l - 1; i >= 0; i--) {
    if (w.substring(0, i) == w.substring(l - i, l)) {
      return i;
    }
  }
}

console.log(garland("programmer"), 0)
console.log(garland("ceramic"), 1)
console.log(garland("onion"), 2)
console.log(garland("alfalfa"), 4)
console.log(garland('hotshots'), 4)
console.log(garland('abracadabra'), 4)
console.log(garland('couscous'), 4)
console.log(garland('dd111ddd111'), 5)
