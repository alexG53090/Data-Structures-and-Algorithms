function garland(word) {
	var result = 0;
	for (var i=1;i<word.length;i++) {
		if (word.substr(0,i) === word.substr(-i)){
			result = i;
		}
	}
	return result;
}

console.log(garland('programmer'));
console.log(garland('ceramic'));
console.log(garland('onion'));
console.log(garland('alfalfa'));
console.log(garland('hotshots'));
console.log(garland('abracadabra'));
console.log(garland('couscous'));
