function addBinary(a,b) {
    let sum = a+b;

    let rest = 0
    let binary = []
    while(sum != 0)
    {
        rest = sum % 2
        binary.push(rest)
        sum = parseInt(sum / 2)
    }
    binary.reverse().join()
  
    return (binary.join('').toString());
}
console.log(addBinary(1,1))



function addbinary2(a,b)
{
    return (a+b).toString(2);
}
