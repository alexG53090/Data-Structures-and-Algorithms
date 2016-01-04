function countLetters (input) {
	return printPaths(sanitize(input).split('').reduce(incrementPath, {}));
}

function incrementPath (object, path) {
	if (!object[path]) {
		object[path] = 0;
	}
	object[path] += 1;
	return object;
}

function sanitize (input) {
	return input.toLowerCase().replace(/[^a-z]/ig, '');
}

function formatLetter (letter, count) {
	return letter + ':' + count;
}

function printPaths (object) {
	return Object.keys(object).map(function (key) {
		return formatLetter(key, object[key]);
	}).join(' ');
}

console.log(countLetters("Hello World"));
