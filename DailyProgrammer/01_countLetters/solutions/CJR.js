// Created by CJ R. December 01 2015

function countLetters(input) {
    // a place to store the counters
    var counters = {};

    // convert input to lowercase
    input = input.toLowerCase();

    // iterate over the chars of the string
    for (var i = 0; i < input.length; i++) {
        // check to see if a letter
        if(input[i] <= 'z' && input[i] >= 'a') {
            // convert the char to lowercase - str.toLowerCase();
            if(counters.hasOwnProperty(input[i])) {
                // increment counter for given char obj[char]++
                counters[input[i]]++;
            }
            else {
                counters[input[i]] = 1;
            }
        }
    }

    // print out the char counts
    return JSON.stringify(counters);
}

var result = countLetters('The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.');
console.log(result);
