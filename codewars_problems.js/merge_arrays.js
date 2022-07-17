function mergeArrays(arr1, arr2) 
{
    if(arr1[0] > arr1[1])
    arr1.reverse();
    if(arr2[0] > arr2[1])
    arr2.reverse();

    let arr =[]
  let index = 0;
  let i = 0;
  let j = 0;
  while ( i < arr1.length && j < arr2.length)
  {
      if(arr1[i] < arr2[j])
      {
          arr[index] = arr1[i]
          index++
        i++
    }
    else
    if(arr1[i] > arr2[j])
    {
        arr[index] = arr2[j]
        index++
        j++
    }
    else
    if(arr1[i] == arr2[j])
    {
        arr[index] = arr1[i]
        index++
        i++
        j++
    }
  }
  
  for( k = i; k < arr1.length; k++)
   { 
       arr[index] = arr1[k]
       index++
    }
    
    for( l = j ; l < arr2.length; l++)
   { 
       arr[index] = arr2[l]
        index++
    }

    return arr;
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))



function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
function mergeArrays1(arr1, arr2)
{
    let result = [...arr1, ...arr2]
    return (result.sort((a,b) => a-b).filter(onlyUnique));
}

console.log(mergeArrays1([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))



function mergeArrays2(arr1,arr2)
{
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))))

}
console.log(mergeArrays2([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
