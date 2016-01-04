function addUp(){
  addNumbers(128497512).then(function(numberArray){
    console.log(numberArray)
    addAllNumbers(numberArray).then(function(added){
      console.log(added);
}
addUp();

function addNumbers(integer){
  return new Promise(function(resolve, reject){
    var theNumber = integer;
    var stringNumber = theNumber.toString();
    var numberArray = []
    for(i = 0; i < stringNumber.length; i = i + 1){
      var number = stringNumber[i];
      numberArray.push(number);
    }
    resolve(numberArray)
  })
}

function addAllNumbers(array){
  return new Promise(function(resolve, reject){
    var newNumber = [];
    array.reduce(function(item, index){
      var added = item + index;
      newNumber.push(added);
    })
    resolve(added)
  })
}

function addEm(integer){
  var theNumber = integer;
  var stringNumber = theNumber.toString();
  var numberArray = []
  for(i = 0; i < stringNumber.length; i = i + 1){
    var number = stringNumber[i];
    numberArray.push(number);
  }
  var numbersAgain = parseInt(numberArray)
  console.log(numbersAgain)
  var newnumber = [];
  numbersAgain.reduce(function(a, b){
    var newNum = a + b;
    console.log(newNum);
  })

}

addEm(348623754)
