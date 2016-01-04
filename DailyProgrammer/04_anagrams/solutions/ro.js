function anagram(word, test) {
  return alphabetize(word) === alphabetize(test)
}

function alphabetize(word) {
  return word.split('').sort().join('')
}

//Stretch
function anagramStretch(word, testArr) {
  return testArr.filter(function (test) {
    return alphabetize(word) === alphabetize(test)
  })
}
