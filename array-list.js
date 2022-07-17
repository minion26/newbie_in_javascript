function arrayToList(arr)
{
    let list = null;
    for ( i = arr.length-1 ; i >= 0; i--)
        list = { value : arr[i], rest : list}
    return(list);
}
console.log(arrayToList([2,3,4]))



function listToArray(list)
{
    let arr = []
    let node = list;
    while ( node != null)
    {
        arr.push(node.value);
        node = node.rest;
    }

    return(arr);
}
console.log(listToArray({
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}));
