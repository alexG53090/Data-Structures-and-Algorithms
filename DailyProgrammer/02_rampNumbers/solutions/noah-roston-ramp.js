function rampNumber(number){
  number = number.toString();
  var ans = [];
  for(var i =0; i < number.length;i++){
    ans.push(Number(number.charAt(i)));
  }
for(var i = 0; i < ans.length -1; i++){
  if(ans[i] > ans[i+1]){
    return false;
  }
}
return true;
}
console.log(rampNumber(12300));
console.log(rampNumber(123456));
