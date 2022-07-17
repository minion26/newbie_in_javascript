function inArray(array1,array2){

    //elimin duplicatele => folosesc Set
    let r = new Set()
    for ( i = 0; i < array2.length; i++)
        for ( j = 0; j < array1.length; j++)
            if( array2[i].indexOf(array1[j]) != -1)
                r.add(array1[j])
    let array = [...r]
    
    
    //ordonez lexicografic => array.sort()
    return ( array.sort() )
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
