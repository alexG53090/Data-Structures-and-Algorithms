function upDown(array){
  return (array.map(function(elem,index,arr){
    if (index>0){
      if (elem<arr[index-1]) return 'down';
      if (elem===arr[index-1]) return 'even';
      if (elem>arr[index-1]) return 'up';
    }
  })).splice(1);
}


console.log(upDown([6,3,5,4,3,4,4,5]));
