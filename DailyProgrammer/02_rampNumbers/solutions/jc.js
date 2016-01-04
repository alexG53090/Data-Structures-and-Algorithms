var result = true;

function rampNumber(int){
  var test = int.toString();
  var min = 0;
  for (var i = 0; i < test.length; i +=1){
    var current = parseInt(test.charAt(i));
    if(current < min){
        result = false;
        break;
    }else{
        min = current;
    }
  } 
  return result;
}

rampNumber(12945);
console.log(result);
