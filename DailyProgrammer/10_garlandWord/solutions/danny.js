'use strict';

const garland = (s) => {
  let s1, s2;
  let n = 1;
  while(n<s.length) {
    s1 = s.slice(0, s.length-n)
    s2 = s.slice(-s.length+n)
    if (s1 === s2) {
      return s.length - n
    }
    n = n+1;
  }
  return 0
}

const garland = (s) => {
  let beginning = s.split('')
  let ending = s.split('')
  function tick () {
    beginning.pop()
    ending.shift()
    return beginning.length
  }
  while(tick()) {
    if (beginning.join('') === ending.join('')) {
      return beginning.length
    }
  }
  return 0
}

console.log('programmer', garland('programmer'))
console.log('ceramic', garland('ceramic'))
console.log('onion', garland('onion'))
console.log('alfalfa', garland('alfalfa'))
console.log('hotshots', garland('hotshots'))
console.log('abracadabra', garland('abracadabra'))
console.log('couscous', garland('couscous'))
