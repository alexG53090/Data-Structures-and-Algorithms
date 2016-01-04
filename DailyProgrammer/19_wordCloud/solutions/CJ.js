function wordCount(input) {
  // create object to store results
  var result = {};
  //Iterate over object to get peoples names
  for(var person in input) {
    //Iterate over each quote
    for (var i = 0; i < input[person].length; i++) {
      //Split each quote into words
      var quote = input[person][i].toLowerCase();
      var words = quote.split(' ');
      // iterate over words
      for (var j = 0; j < words.length; j++) {
        // check to see if key is already set
        var word = words[j];
        //if(word in result)
        if(!result.hasOwnProperty(word)) {
          // if not, set a key in result object with a value of
          // an object with a count key with value of 0 and a people
          // key with a value of array
          result[word] = {
            count: 0,
            people: []
          };
        }
        // increment counter
        result[word].count++;
        // check to see if person is in people array
        if(result[word].people.indexOf(person) == -1){
          // if not add person to people array
          result[word].people.push(person);
        }
      }
    }
  }

  return result;
}

var result = wordCount({
  "Ila Huels": [
    "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
    "brand sexy channels",
    "ENVISIONEER ROBUST E-COMMERCE",
    "TRANSFORM WIRELESS ARCHITECTURES",
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS"
  ],
  "Cristopher Feest": [
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
    "brand sexy channels",
    "BENCHMARK 24/7 PARADIGMS"
  ]
});

console.log(result)
