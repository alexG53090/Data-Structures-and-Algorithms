function checkForPalindrome (string){
  return (string === string.split('').reverse().join(''));
}
console.log(checkForPalindrome('anna'));
