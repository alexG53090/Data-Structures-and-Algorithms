function calculateRPN(string){
string = string.replace(/\s/g, '');
  var array = string.split('');
  console.log(array);

var stack = [];
for(var i = 0; i < array.length; i++){
    if(array[i] == 'x'){
      stack[stack.length-2] = stack[stack.length-2]*stack[stack.length-1];
      stack.splice(-1,1);
    }
    else if(array[i] == '-'){
      stack[stack.length-2] = stack[stack.length-2] - stack[stack.length-1];
    stack.splice(-1,1);
    }
    else if(array[i] == '+'){

      stack[stack.length-2] = stack[stack.length-2] + stack[stack.length-1];
    stack.splice(-1,1);
    }
    else if(array[i] == '/'){
      stack[stack.length-2] = stack[stack.length-2]/stack[stack.length-1];
      stack.splice(-1,1);
    }
    else{
        stack.push(Number(array[i]));
    }



    console.log(stack);
}
return stack;
}

console.log(calculateRPN('5 1 2 + 4 x + 3 -'));
console.log(calculateRPN('1 2 + 4 5 6 8 x - + +'));
