function countChars(str){
    var result = {};    
    str = str.toLowerCase();
    for(var i = 0; i < str.length; i += 1){
        if(str.charAt(i) !== ' ' && str.charAt(i) !== '.'){
            if(result.hasOwnProperty(str.charAt(i))){
                result[str.charAt(i)] += 1;
            }else{
                result[str.charAt(i)] = 1;      
            }
        }
    }
    var letters = '';
    for(key in result){
        letters += key + ':' + result[key] + ',  ';
    }
    console.log(letters);
}

countChars('The quick brown fox jumps over the lazy dog.');          
