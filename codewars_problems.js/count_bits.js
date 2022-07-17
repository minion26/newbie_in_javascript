var countBits = function(n) {
    // Program Me
    let bits = n.toString(2);
    let myArr = bits.split("")
    return myArr.filter(element => element == 1).length
};
console.log(countBits(1234))
