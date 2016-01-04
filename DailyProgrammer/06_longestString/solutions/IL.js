// created by Isaac Lessard

function longest(array){
    var largest = array[0];
    for(i=1;i<array.length;i++){
        if(array[i-1].length < array[i].length){
            largest = array[i]
        }
    }

    var obj = {
        "Longest Word": largest,
        "Length": largest.length
    }
    return obj;
}


longest(["truck", "sidewalk", "book"])
longest(["long", "longer", "longest"])
