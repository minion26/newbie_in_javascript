function countPositivesSumNegatives(input) {
    // your code here
    
    let output = [];
    output.push(input.filter(element => element>=0).length)
    output.push(input.filter(element => element < 0).reduce((a,b)=> a+b, 0))
    return output;
  }
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
