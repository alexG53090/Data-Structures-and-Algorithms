function palindrome(string){
    var revString = '';
    for (var i = string.length - 1; i >=0; i -= 1){
         revString += string[i];
    }
    console.log(string.toLowerCase() === revString.toLowerCase());
}
palindrome('jonathan');
palindrome('racecar');
