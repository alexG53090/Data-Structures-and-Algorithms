var input = {
  "Ila Huels": [
    "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
    "brand sexy channels",
    "ENVISIONEER ROBUST E-COMMERCE",
    "TRANSFORM WIRELESS ARCHITECTURES",
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS"
  ],
  "Cristopher Feest": [
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
    "brand sexy channels",
    "BENCHMARK 24/7 PARADIGMS"
  ]
};

Array.prototype.pushUnique = function(item) {
  if (!(this.indexOf(item) + 1)) this.push(item);
};

function reformat(data) {
  return Object.keys(input).reduce(function(output, person) {
    var string = data[person].join(' ').toLowerCase();
    string.split(' ').forEach(function(buzzword) {
      output[buzzword] = output[buzzword] || { count: 0, people: [] };
      output[buzzword].count++;
      output[buzzword].people.pushUnique(person);
    });
    return output;
  }, {});
}

console.log(reformat(input));
