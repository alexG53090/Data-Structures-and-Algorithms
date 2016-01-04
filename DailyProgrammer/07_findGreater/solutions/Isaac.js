function findGreater (arr, num) {
    for (i=0, fin = [];i<arr.length;i++) {
        if(arr[i] > num) {
            fin.push(arr[i])
        }
    }
    return fin;
}

findGreater([1,2,3,4,5,6,7,8], 5);
