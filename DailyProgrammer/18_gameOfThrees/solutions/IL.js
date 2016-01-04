function gof (num) {
    var holder = 0;
    while (num > 1) {
        if (num %3 === 0) {
            holder = num
            num = num / 3;
            console.log(holder + '/ 3')
            console.log(num)
        }
        if (num%3 === 1) {
            holder = num;
            num = num - 1
            console.log(holder + '- 1')
            console.log(num)
        }
        if (num%3 === 2) {
            holder = num;
            num = num + 1
            console.log(holder + '+ 1')
            console.log(num)
        }
    }
    
}
