function anagram (str1, str2) {
    var array1 = str1.split('');
    var array2 = str2.split('');
    for(i=0;i<array1.length;i++){
        for(m=0;m<array1.length;m++){
            if(array1[i] === array2[m]){
                delete array2[m];
            }
        }
    }
    var final = array2.join('');
    if (final.length < 1){
        console.log(str1, " and ", str2, " are an anagram");
    } else {
        console.log("These are not anagrams");
    }
}

anagram("silly","ysill")
anagram("asdffdsa","qwerrewq")
anagram("pameesxl","examples")
