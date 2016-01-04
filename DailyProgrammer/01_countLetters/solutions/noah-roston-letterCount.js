
function letterCount(string){
//A place to store teh counters
  var counters = {};
  //get the length of the input string
  var length = string.length;
  for(var i = 0; i < length; i++){
    if (string[i].match(/[a-z]/i)) {
    // alphabet letters found
    var letter = string[i].toLowerCase();

    if(!counters[letter]){
      counters[letter] = 1;
    }
    else{
      counters[letter] = counters[letter]+1;
    }


}
  }
  for(i in counters){
    console.log(i+':'+ counters[i]);
  }
}



letterCount('hEllooooo3 4 5 1');
