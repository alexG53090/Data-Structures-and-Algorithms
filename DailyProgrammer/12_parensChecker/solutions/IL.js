function parensChecker(str) {
    str = str.split('');
    var left = ')'
    var right = '('
    var countR = 0;
    var countL = 0;
    for (i=0;i<str.length;i++){
        if (str[i] == left) {
            countL++
        }
        if (countR >= countL) {
            if (str[i] == right) {
            countR++
            }
        }
        
    }
    
    return countR === countL ? true : false;
    
}
