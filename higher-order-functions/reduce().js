function reduce(array, combine, start)
{
    let current = start;
    for(let element in array)
        current = combine(array[element], current)
    return (current)
}
console.log(reduce([1,2,3,4,5], (a,b) => a*b, 1))


function getTotalValue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
//tranform functia de mai sus in higher order function utilizand reduce/filtre/map
const totalValue = numbers.reduce( (a,b) => a+b, 0)
console.log(totalValue);


