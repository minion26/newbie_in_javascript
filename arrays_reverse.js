function reverseArray(arr)
{
    let newArr = [];
    for ( i = 0 ; i < arr.length; i++)
        newArr.unshift(arr[i]);
    return(newArr);
}
console.log(reverseArray([1,2,3,4,5,6]));


function reverseArrayInPlace(ar)
{
    if(arr.length % 2 == 0)
        jum = arr.length / 2;
    else
        jum = arr.length / 2 - 1;

    for( i = 0; i < jum; i++)
    {
        aux = ar[i];
        ar[i] = ar[ar.length-i-1];
        ar[ar.length-i-1] = aux;
    }
    return(ar)
}
console.log(reverseArrayInPlace([1,2,3,4,5,6]));


array.reverse();
